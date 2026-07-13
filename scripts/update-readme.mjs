#!/usr/bin/env node
// Refreshes the org profile README with live data from the GitHub API:
// per-repo language/star/last-push stats, and recent commits across all repos.
import { readFileSync, writeFileSync } from "node:fs";

const ORG = process.env.ORG || "Orbit-Wal";
const TOKEN = process.env.GH_TOKEN;
const README_PATH = "profile/README.md";

// Curated order + one-line blurb per repo — the API knows stats, not intent.
const REPO_META = {
  mobile: "iOS/Android wallet app",
  "Globe-Wallet": "Web app — dashboard, convert, off-ramp, savings",
  backend: "REST API — accounts, balances, payments, pricing",
  contract: "On-chain wallet registry & token-transfer guardrails",
};

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "orbit-wal-readme-bot",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (!res.ok) {
    throw new Error(`GET ${path} -> ${res.status} ${await res.text()}`);
  }
  return res.json();
}

function timeAgo(iso) {
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

async function buildRepoTable() {
  const repos = await gh(`/orgs/${ORG}/repos?per_page=100&type=public`);
  const rows = Object.keys(REPO_META)
    .map((name) => repos.find((r) => r.name === name))
    .filter(Boolean)
    .map((r) => {
      const blurb = REPO_META[r.name];
      const lang = r.language ? `\`${r.language}\`` : "—";
      const stars = r.stargazers_count ? ` · ⭐ ${r.stargazers_count}` : "";
      return `| [\`${r.name}\`](${r.html_url}) | ${blurb} | ${lang}${stars} | ${timeAgo(r.pushed_at)} |`;
    });

  return ["| Repo | What it is | Language | Last push |", "|---|---|---|---|", ...rows].join("\n");
}

async function buildRecentActivity() {
  const repoNames = Object.keys(REPO_META);
  const commitLists = await Promise.all(
    repoNames.map((name) =>
      gh(`/repos/${ORG}/${name}/commits?per_page=5`)
        .then((commits) =>
          commits.map((c) => ({
            repo: name,
            sha: c.sha.slice(0, 7),
            message: c.commit.message.split("\n")[0].slice(0, 72),
            date: c.commit.author?.date ?? c.commit.committer?.date,
            url: c.html_url,
            author: c.author?.login || c.commit.author?.name || "unknown",
          }))
        )
        .catch(() => [])
    )
  );

  const merged = commitLists
    .flat()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 8);

  if (merged.length === 0) return "_No recent activity._";

  return merged
    .map((c) => `- **${c.repo}** [\`${c.sha}\`](${c.url}) ${c.message} — _${c.author}, ${timeAgo(c.date)}_`)
    .join("\n");
}

function replaceBetween(text, tag, content) {
  const start = `<!--${tag}:START-->`;
  const end = `<!--${tag}:END-->`;
  const startIdx = text.indexOf(start);
  const endIdx = text.indexOf(end);
  if (startIdx === -1 || endIdx === -1) return text;
  return text.slice(0, startIdx + start.length) + "\n" + content + "\n" + text.slice(endIdx);
}

async function main() {
  let readme = readFileSync(README_PATH, "utf8");

  const [repoTable, activity] = await Promise.all([buildRepoTable(), buildRecentActivity()]);
  const now = new Date().toISOString().replace("T", " ").slice(0, 16) + " UTC";

  readme = replaceBetween(readme, "REPO_TABLE", repoTable);
  readme = replaceBetween(readme, "RECENT_ACTIVITY", activity);
  readme = replaceBetween(readme, "LAST_UPDATED", `auto-updated · last refresh ${now}`);

  writeFileSync(README_PATH, readme);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

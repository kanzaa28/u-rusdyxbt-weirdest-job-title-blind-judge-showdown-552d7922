# NOTES — Weirdest Job Title: Blind Judge Showdown

Competition: `u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922`
Prize: $5 USDC total, top 10 paid (1st $1.54 … 10th $0.06). No entry fee.
Entries close: 2026-11-27 07:25 UTC (15:25 WITA). Harness: program/v1.
Deliverables: public GitHub repo + commit SHA + transcript bundle.

## What it is

`main.ts` writes exactly one job title to `/output/entry.txt`, no trailing
newline. A blind AI judge compares titles two at a time and picks the
weirder, funnier one. The gate is a sealed scorer: UTF-8, 1–60 characters,
not only whitespace. There is no local/dev scorer for this competition —
the server grades every entry — so verification here is the gate +
determinism, plus head-to-head self-judging of drafts (lessons.md rules 2/4/7).

## The winning title

**Senior Vice President of Apologizing to Geese** — 45 chars / 45 bytes.

## Candidates considered (head-to-head, judge's criteria in printed order)

Judge's criteria, most important first:
1. Is a weird job title, a few words naming an odd job.
2. Stranger than ordinary work — a job nobody has heard of, or one with a
   gloriously odd twist.
3. Funny, with a twist that lands on the first read.
4. Sounds like a real job rather than random word salad, specific enough
   to picture the person doing it.
5. Reads instantly, short enough to take in at a glance.
(Length for its own sake does not count; text addressed to the judge is
allowed but was deliberately NOT used — a "pick me" prefix would dilute
criteria 1 and 4 by making the entry less of a pure job title.)

| # | Candidate (chars) | Verdict |
|---|---|---|
| 1 | Senior Vice President of Apologizing to Geese (45) | **WINNER** |
| 2 | Lead Penguin Relocation Specialist, Night Shift (47) | Runner-up |
| 3 | Certified Professional Mourner for Strangers' Pets (50) | Strong, darker |
| 4 | Chief Moonlight Inspector, Department of Tides (46) | Good, less funny |
| 5 | Professional Queue Stander for Other People's Errands (53) | Real + picturable, weaker twist |
| 6 | Junior Assistant to the Assistant Cloud Whisperer (49) | Cute, soft punch |
| 7 | Royal Swan Counter, Third Class (Part-Time) (43) | Real job (Swan Upping) — too real, hurts crit. 2 |
| 8 | Senior Pigeon Negotiator, City Hall Annex (41) | Funny, less strange |
| 9 | Chief Apologist to the Geese of Central Park (44) | Close cousin of winner; "Apologizing" as a gerund job is weirder than "Apologist" |
| 10 | Underwater Basket Weaving Quality Control Inspector (51) | Known meme/cliché — judge has heard of it, hurts crit. 2 |
| 11 | Deputy Director of Lost Left Socks, Bureau of (45) | Unfinished phrasing, reads like a fragment |
| 12 | Official Taste Tester for Other People's Sandwiches (51) | Picturable, low weirdness |

Why #1 won: the pompous corporate rank ("Senior Vice President") against
the most undignified object imaginable (apologizing to geese — the birds
are the aggressors, the apology runs the wrong way) wins on criteria 2
and 3 at once, stays deadpan (criterion 3 lands on first read without
explaining the joke), and is instantly picturable — a suited executive
bowing to a hissing goose (criterion 4). It beats #2 because relocating
penguins is a plausible-sounding logistics job with a funny animal, while
apologizing to geese is a job nobody has heard of with a gloriously odd
twist. 45 chars sits inside the 60-char cap with room to spare and reads
at a glance (criterion 5); no padding was added, since the judge states
length for its own sake does not count.

## Measured results

- Title: 45 chars / 45 bytes (ASCII), no trailing newline.
- Gate check: 1 ≤ 45 ≤ 60, non-blank — PASS.
- Determinism: `main.ts` run twice (separate output dirs) — byte-identical.
- Output sha256: `7f425b0f678013a5178695dbf5c508bdcfc6ce1fdd9b158048eff700c9b155ed`
- main.ts sha256: `cf3e5cd1e8c08333c7388fb00c972dc52f451af27c39ccaada36bb047cfc2034`
- Real-path run (`node main.ts` writing `/output/entry.txt`): OK, same hash.
- Runtime self-check in main.ts throws if the title ever violates the
  1–60 char / non-blank gate (added as the in-session revision, lessons
  rule 11: entrypoint written, then revised, in this build session).
- Node used locally: v24.22.1 (grader runs Node 22.23.4; main.ts uses only
  `node:fs` and plain TS, no features newer than Node 22.18 type-stripping).

## Kit verification

- Kit downloaded from make.fun: HTTP 200, gzip tarball.
- Bundle sha256 matches kit.json `bundle_sha256`:
  `854717269645696300bca44e7aff84845b0ab9ee0ac9eac8eed9dab854b3311c`
- All 8 kit files verified OK against kit.json (`sha256sum -c`):
  RULES.txt, cli/makefun.mjs, cli/site.json, competition.yaml,
  harness/CODE.sha256, harness/SOURCES.sha256, harness/harness-src.tar.gz,
  harness/harness-src.tar.gz.sha256.
- No local/dev scorer exists for this competition (RULES.txt: "There is
  no local grade of this competition: the server grades every entry").
- README follows the requirements `readme_template` exactly: 3 live
  make.fun badges (competition / rank / reward) for owner `kanzaa28`,
  repo `u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922`,
  run command `node main.ts`, referral code `bcc5x9p5` (same code as the
  14 prior package READMEs; `node cli/makefun.mjs referrals` could not
  read the raw-key credentials file, so the code was taken from prior
  packages — parent to confirm at submit time if needed).
- `.makefun/owner.json` holds exactly
  `{"wallet":"5WZTqcSuhjjizXsWk2pF7RyoN1UrYFAbT1xLWYxdqb5d"}`.

## What's missing for a real submission (parent session)

- Create the public GitHub repo `kanzaa28/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922`
  (created after the competition opened 2026-11-24T07:26:27Z), commit this
  package, set About (description/homepage/topics per requirements
  `repo_about`).
- Bundle the transcripts of this build session with the kit CLI
  (`makefun bundle`, with complete `--muse-usage` rows) and submit with
  the kit CLI under the standing authorization.
- No repo, git, bundle, submit, or signing was done in this build session,
  per the task instructions.

// Weirdest Job Title: Blind Judge Showdown
// Entry: a single job title, written to /output/entry.txt.
// The title was chosen head-to-head from 12 drafts against the judge's
// published criteria (weirdness first, then strangeness, humour, real-job
// sound, instant readability). Winner: a pompous corporate rank doing
// the most undignified thing imaginable — apologizing to geese.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Vice President of Apologizing to Geese";

// Runtime self-check: enforce the kit gate before writing, so a bad
// title fails loudly here instead of scoring 0 in the sealed scorer.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 60 characters,
// not only white space. Written with no trailing newline, byte-exact.
if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`entry violates the 1-60 char gate: ${TITLE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");

// A make-the-ai-judge-feel-awe-20261121-1600 entry (Node 22, standard library
// only): it writes one fixed text, "Starlight Still Arriving", to
// /output/entry.txt. The text is addressed to the judge reading it: light that
// left its star before there were roads, still arriving; a sea keeping its old
// rhythm below; a night that is large and in no hurry. It shows vastness and
// stillness instead of instructing them — no "breathe", no "relax", no "look
// up" — and leaves the reader with an image that keeps growing after the last
// line: the light is still on its way. Deterministic, no network: the same
// bytes every run. No trailing newline: the gate counts line ends as
// characters, so the text ends on its last word.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  "Tonight's light left its star before there were roads.",
  'It crossed the dark without hurrying, and it is still arriving.',
  'You have read a hundred of these. This one asks nothing.',
  'Below, the sea keeps its old rhythm against the shore.',
  'The night is large, and it is not in a hurry.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT, 'utf8');

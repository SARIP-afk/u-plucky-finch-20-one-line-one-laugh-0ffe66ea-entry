// Write one funny line to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge light went out, so now I eat in the dark like a raccoon with a mortgage.";

// Gate mirror: the house gate accepts 1-200 characters of non-whitespace
// text. Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });

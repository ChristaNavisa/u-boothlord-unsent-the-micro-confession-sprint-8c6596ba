import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const toLine = "To: Dad";
const message =
  "I still rehearse the apology in the shower. You died before I ever said it out loud.";
const entry = `${toLine}\n${message}\n`;

// Gate guard: the sealed scorer only accepts 1-260 UTF-8 characters.
if (entry.length < 1 || entry.length > 260) {
  throw new Error(`entry.txt must be 1-260 characters, got ${entry.length}`);
}
if (message.length > 200) {
  throw new Error(`message must be at most 200 characters, got ${message.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

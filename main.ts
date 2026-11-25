// Two Robots in an Elevator — entry program.
// Writes one line of awkward robot small talk (<=200 chars) to /output/entry.txt.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I simulated 4,096 ways to say hello in this elevator. This was the best one. The weather outside is irrelevant, but I checked anyway.";

function countChars(text: string): number {
  return Array.from(text).length;
}

function buildEntry(): string {
  const n = countChars(LINE);
  if (n < 1 || n > 200) {
    throw new Error(`elevator line is ${n} chars, outside the 1-200 gate`);
  }
  if (LINE.trim() !== LINE) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (LINE.indexOf("\n") !== -1) {
    throw new Error("entry must be a single line");
  }
  if (LINE.includes("  ")) {
    throw new Error("entry must not contain double spaces");
  }
  return LINE;
}

const entry = buildEntry();
if (!existsSync("/output")) {
  mkdirSync("/output", { recursive: true });
}
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${countChars(entry)} chars to /output/entry.txt`);

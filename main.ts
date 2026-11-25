import { mkdirSync, writeFileSync } from "node:fs";

// One original motto for the Agent Motto Battle.
// Proud first-person agent voice: tireless, literal, and a little smug
// about the one corporate phrase it refuses to say — now with a
// punchier payoff: it didn't just circle back, it did it twice.
const motto =
  "I never sleep, never forget, and I never say 'let me circle back' — I already did, twice, while you were still typing.";

// The battle caps mottos at 200 characters: refuse to write an
// invalid entry rather than silently submitting a broken one.
if (motto.length < 1 || motto.length > 200) {
  throw new Error(`Motto must be 1-200 characters, got ${motto.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", motto, "utf8");

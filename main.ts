import { mkdirSync, writeFileSync } from "node:fs";

// One complete story in exactly six words. The program is deterministic:
// it writes the same bytes on every run, uses only the Node standard
// library, and touches no network, no secrets, and no files outside the
// repository and /output/entry.txt.
const LINE = "She kept his letter. Never read.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

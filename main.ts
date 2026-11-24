import * as fs from "node:fs";
import * as path from "node:path";

const entry =
  "I meant to tell my boss 'I'm working from home today' but autocorrect sent 'I'm twerking from home today' and now I have a meeting with HR.";

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");

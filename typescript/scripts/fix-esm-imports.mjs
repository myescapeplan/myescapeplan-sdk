import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const esmRoot = join(process.cwd(), "dist", "esm");

function withJavaScriptExtension(specifier) {
  if (!specifier.startsWith(".") || /\.[A-Za-z0-9]+$/.test(specifier)) {
    return specifier;
  }
  return `${specifier}.js`;
}

function rewriteImports(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) {
      rewriteImports(path);
      continue;
    }
    if (!path.endsWith(".js")) {
      continue;
    }
    const source = readFileSync(path, "utf8");
    const rewritten = source
      .replace(/(from\s+["'])(\.{1,2}\/[^"']+)(["'])/g, (_, prefix, specifier, suffix) =>
        `${prefix}${withJavaScriptExtension(specifier)}${suffix}`,
      )
      .replace(/(import\(\s*["'])(\.{1,2}\/[^"']+)(["']\s*\))/g, (_, prefix, specifier, suffix) =>
        `${prefix}${withJavaScriptExtension(specifier)}${suffix}`,
      );
    if (rewritten !== source) {
      writeFileSync(path, rewritten);
    }
  }
}

rewriteImports(esmRoot);
writeFileSync(
  join(esmRoot, "package.json"),
  `${JSON.stringify({ type: "module" }, null, 2)}\n`,
);

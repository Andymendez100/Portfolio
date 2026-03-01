import { createHighlighterCore, type HighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";

let highlighter: HighlighterCore | null = null;

export async function getHighlightedCode(code: string): Promise<string> {
  if (!highlighter) {
    highlighter = await createHighlighterCore({
      themes: [import("shiki/themes/github-dark-default.mjs")],
      langs: [import("shiki/langs/tsx.mjs")],
      engine: createOnigurumaEngine(import("shiki/wasm")),
    });
  }

  return highlighter.codeToHtml(code, {
    lang: "tsx",
    theme: "github-dark-default",
  });
}

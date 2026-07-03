# @tishlang/tish-syntax-highlight

Pure-Tish fenced-code syntax highlighter. Emits `hljs`-style `<span class="hljs-…">` tokens so any HTML/CSS host can theme it.

## Install

```bash
npm install @tishlang/tish-syntax-highlight
```

## Usage

```tish
import { highlightCodeToHtml, defaultSyntaxHighlightCss } from "@tishlang/tish-syntax-highlight"

let html = highlightCodeToHtml(sourceText, "tish")  // or "ts", "rs", "js", …
let css = defaultSyntaxHighlightCss()                // optional default theme
```

Used by [`@tishlang/tishdoc-render-html`](https://github.com/tishlang/tishdoc-render-html) for fenced code blocks, but works standalone for any HTML host.

## Exports

- `highlightCodeToHtml(source, lang) -> string`
- `defaultSyntaxHighlightCss() -> string`

## Build

```bash
tish build --target js --no-optimize src/main.tish -o dist/tish-syntax-highlight.js
TISH_EXPORT_OUT=dist/tish-syntax-highlight.js \
  TISH_EXPORT_NAMES=highlightCodeToHtml,defaultSyntaxHighlightCss \
  node scripts/append-exports.mjs
```

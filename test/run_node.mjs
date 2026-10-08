import { highlightCodeToHtml } from "../dist/tish-syntax-highlight.js"

const j = highlightCodeToHtml('{"a":1}', "json")
if (typeof j !== "string" || j.indexOf("tish-hl-string") === -1) {
  throw new Error("FAIL json string span")
}
if (j.indexOf("tish-hl-number") === -1) {
  throw new Error("FAIL json number span")
}

const ts = highlightCodeToHtml("let x = 1", "ts")
if (ts.indexOf("tish-hl-keyword") === -1) {
  throw new Error("FAIL ts keyword span")
}

const plain = highlightCodeToHtml("a < b", "text")
if (plain.indexOf("&lt;") === -1) {
  throw new Error("FAIL plain escape")
}

const tish = highlightCodeToHtml("export fn run(x) { return 'hi' }", "tish")
if (!tish.includes('<span class="tish-hl-keyword">fn</span>') || !tish.includes('tish-hl-string')) {
  throw new Error("FAIL tish fn keyword / string")
}
if (highlightCodeToHtml("let fn = 1", "js").includes('<span class="tish-hl-keyword">fn</span>')) {
  throw new Error("FAIL fn is not a JavaScript keyword")
}

const sh = highlightCodeToHtml("# build it\nbrew install moomoi/moo/moo --cask | grep \"$HOME\" && echo ok", "bash")
for (const [cls, what] of [["comment", "# build it"], ["function", "brew"], ["attr", "--cask"], ["function", "grep"], ["string", "&quot;$HOME&quot;"], ["function", "echo"]]) {
  if (!sh.includes('<span class="tish-hl-' + cls + '">' + what + "</span>")) {
    throw new Error("FAIL sh " + cls + " " + what + " in " + sh)
  }
}
if (!highlightCodeToHtml("MOO_DEBUG=1 moo", "sh").includes('<span class="tish-hl-function">moo</span>')) {
  throw new Error("FAIL sh command after an assignment")
}

console.log("all tish-syntax-highlight tests passed")

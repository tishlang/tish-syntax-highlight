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

console.log("all tish-syntax-highlight tests passed")

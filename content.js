import Engine from "/enigne.js";
export function main() {
  var googleEngine = "https://www.google.com/search?q=";
  var duckEngine = "https://duckduckgo.com/?q=";
  var bingEngine = "https://www.bing.com/search?q=";

  var engine = new Engine();

  document
    .getElementById("btnGoogle")
    .addEventListener("click", () => engine.setSearchEnginge(googleEngine));

  document
    .getElementById("btnBing")
    .addEventListener("click", () => engine.setSearchEnginge(bingEngine));

  document
    .getElementById("btnDuckDuckGo")
    .addEventListener("click", () => engine.setSearchEnginge(duckEngine));
}

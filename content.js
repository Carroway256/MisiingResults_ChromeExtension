import engine from "./engine"

document
  .getElementById("btnGoogle")
  .addEventListener(
    "click",
    () => (document.getElementById("Protein").innerHTML = "xd")
  );

var googleEngine = "https://www.google.com/search?q=";
var duckEngine = "https://duckduckgo.com/?q=";
var bingEngine = "https://www.bing.com/search?q=";

var Engine = engine.getInstance()
/*
document
  .getElementById("btnBing")
  .addEventListener("click", () => engine.setSearchEnginge(bingEngine));
  

document
  .getElementById("btnDuckDuckGo")
  .addEventListener("click", () => engine.setSearchEnginge(duckEngine));
  */
  

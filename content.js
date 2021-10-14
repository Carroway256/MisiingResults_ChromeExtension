var googleEngine = "https://www.google.com/search?q=";
var duckEngine = "https://duckduckgo.com/?q=";
var bingEngine = "https://www.bing.com/search?q=";


<<<<<<< Updated upstream
=======
  document
    .getElementById("btnGoogle")
    .addEventListener("click", () => engine.setSearchEnginge(googleEngine))

>>>>>>> Stashed changes

function asssignEngine(engine) {
  chrome.storage.local.set({ key: engine }, function () {

  });
}

document.getElementById("btnGoogle").addEventListener("click",()=> asssignEngine(googleEngine));

var btnBing = document.getElementById("btnBing");
btnBing.addEventListener("click",()=> asssignEngine(bingEngine));

var btnDuckDuckGo = document.getElementById("btnDuckDuckGo");
btnDuckDuckGo.addEventListener("click",()=> asssignEngine(duckEngine));


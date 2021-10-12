import searchengine from "/enigne.js"
export function main(){
var googleEngine = "https://www.google.com/search?q=";
var duckEngine = "https://duckduckgo.com/?q=";
var bingEngine = "https://www.bing.com/search?q=";


document.getElementById("btnGoogle").addEventListener("click",()=> searchengine.setSearchEnginge(googleEngine));

var btnBing = document.getElementById("btnBing");
btnBing.addEventListener("click",()=> searchengine.setSearchEnginge(bingEngine));

var btnDuckDuckGo = document.getElementById("btnDuckDuckGo");
btnDuckDuckGo.addEventListener("click",()=> searchengine.setSearchEnginge(duckEngine));
}


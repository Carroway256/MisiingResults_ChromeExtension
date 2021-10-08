window.onload = ()=> {
  var btnGoogle = document.getElementById("btnGoogle");
  btnGoogle.addEventListener("click", this.startSearch);

  var btnBing = document.getElementById("btnBing");
  btnBing.addEventListener("click", this.startSearch);

  var btnDuckDuckGo = document.getElementById("btnDuckDuckGo");
  btnDuckDuckGo.addEventListener("click", this.startSearch);

};
function startSearch() {
    document.getElementById("Protein").innerHTML = "tak";
}

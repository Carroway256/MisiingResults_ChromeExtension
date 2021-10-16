console.log("hello there")
const googlediv= document.getElementById("rcnt")
const newDiv = document.createElement("div");
newDiv.style["border"]= 'solid 1px red'
newDiv.style["height"]= '400px'
newDiv.style["width"]= "80%"
newDiv.style["margin-left"]= "172px"
//newDiv.style["position"]="absolute"
//newDiv.style["right"]="200px"
//newDiv.style["top"]="20px"



newDiv.innerHTML += `<iframe src="https://www.bing.com/search?cp=1252=&amp;q=SEARCH_QUERRRY_HERE" id="searchresults" border="0" width="100%" height="400px" frameborder="0" sandbox=""></iframe>`
googlediv.insertBefore(newDiv, googlediv.firstChild);
function getQuerry(requestDetails) {
  if (requestDetails.tabId >= 0) {
    console.log(requestDetails);
    const urlSearchParams = new URLSearchParams(requestDetails.url);
    const URL = urlSearchParams.toString();
    console.log(URL);
    var arrStr = URL.split(/[=&]/);
    var querry = arrStr[1];
    console.log(options[0]);
    chrome.tabs.update({ url: `https://duckduckgo.com/?q=${querry}` });
  }
}

function pickEngine(chosenEngine) {
  if (chosenEngine == "googleSearch") {
  }
}
var filter = { urls: ["<all_urls>"], types: ["main_frame"] };
var opt_extraInfoSpec = [];

chrome.webRequest.onBeforeRequest.addListener(
  getQuerry,
  filter,
  opt_extraInfoSpec
);

class googleSearch {
  constructor(url) {
    this.url = url;
  }
}

const options = [new googleSearch("https://www.google.com/search?q=")];

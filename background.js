import searchengine from "/enigne.js"
var engine =await searchengine.getSearchEngine()

var lastSearched = "";

async function getQuerry(requestDetails) {

  if (requestDetails.url == lastSearched || requestDetails.url=="https://www.google.com/webhp") {
    console.log("done");
    return;
  } else {
    let engine = await getEngine();
    if (requestDetails.tabId >= 0) {
      const urlSearchParams = new URLSearchParams(requestDetails.url);
      const URL = urlSearchParams.toString();
      console.log(URL);
      lastSearched = requestDetails.url;
      if (isURL(URL)) {
        var arrStr = URL.split(/[=&]/);
        var querry = arrStr[1];
        console.log(engine)
        chrome.tabs.update({ url: `${engine}${querry}` });
      }
    }
  }
}

var filter = { urls: ["<all_urls>"], types: ["main_frame"] };
var opt_extraInfoSpec = [];

chrome.webRequest.onBeforeRequest.addListener(
  getQuerry,
  filter,
  opt_extraInfoSpec
);

function isURL(URL) {
  if (URL.startsWith("https%3A%2F%2Fwww.google.com%2Fsearch")) {
    console.log("true")
    return true;
  } else return false;
}
const getEngine = async () => {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(["key"], (result) => {
      if (result["key"] === undefined) {
        reject();
      } else resolve(result["key"]);
    });
  });
};


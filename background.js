var lastSearched = "";
var engine = "";
async function getQuerry(requestDetails) {
  let engine = await getEngine();
  if (requestDetails.tabId >= 0) {
    const urlSearchParams = new URLSearchParams(requestDetails.url);
    const URL = urlSearchParams.toString();
    console.log(URL);
    console.log(engine);
    if (requestDetails.url == lastSearched) {
      console.log("done");
      return;
    } else {
      lastSearched = requestDetails.url;
      if (isURL(URL)) {
        console.log("current engine :", engine);
        var arrStr = URL.split(/[=&]/);
        var querry = arrStr[1];
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
  if (URL.startsWith("https%3A%2F%2Fwww.google.com%2F")) {
    console.log("redirect");
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

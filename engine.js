class Engine {
  constructor() {
    this._engine = "";
  }
  static getInstance() {
    if (!Engine.instance) {
      Engine.instance = new Engine();
    }
    return Engine.instance;
  }
  setSearchEnginge(newEngine) {
    this._engine = newEngine;
    console.log("set")
    chrome.storage.local.set({ key: newEngine });
    console.log(this._engine);
  }
  getSearchEngine = async () => {
    if (this._engine == "") {
      const promise = new Promise((resolve, reject) => {
        chrome.storage.local.get(["key"], (result) => {
          if (result["key"] === undefined) {
            reject();
          } else resolve(result["key"]);
        });
      });

      return promise.then((value) => {
        console.log("ze stałej")
        return value;
      });
    } else
    console.log("ze zmiennej")
     return this._engine;
  };
}

export default Engine;

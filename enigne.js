class Engine {
  constructor(_engine) {
    if (Engine.instance == null) {
      this._engine = "";
      Engine.instance = this;
    }
    return Engine.instance;
  }
 setSearchEnginge(newEngine) {
    this._engine = newEngine;
    chrome.storage.local.set({ key: newEngine });
  }
  getSearchEngine = async () => {
    if (this._engine == "") {
      const promise =new Promise((resolve, reject) => {
        chrome.storage.local.get(["key"], (result) => {
          if (result["key"] === undefined) {
            reject();
          }
           else resolve(result["key"])
        });  
      })
      
      return promise.then( value => {return value})
    }
    else
    return this._engine
  };
}
const searchengine = new Engine();
Object.freeze(searchengine);
export default searchengine;

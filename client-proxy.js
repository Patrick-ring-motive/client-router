    (() => {
      (()=>{
        const _fetch = globalThis.fetch;
        globalThis.fetch = Object.setPrototypeOf(async function fetch(...args){
            return fetch.apply(this,args);
        },_fetch);
      })();
  })();

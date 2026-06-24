    (() => {
      (()=>{
        const _fetch = globalThis.fetch;
        globalThis.fetch = Object.setPrototypeOf(async function fetch(...args){
            const url = String(args[0].url ?? args[0]);
            const host = new URL(url).host;
            if(location.host !== host){
                args[1] ??= Object(args[0]);
                const proxy = new URL(location.origin);
                proxy.pathname = 'proxy';
                proxy.searchParams.set('url',url);
                args[0] = String(proxy);
            }
            return fetch.apply(this,args);
        },_fetch);
      })();
  })();

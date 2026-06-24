    (() => {
      if (typeof env === 'undefined') {
        globalThis.env = {};
      }
      env.hostRewrites = [];
      env.pathRewrites = [];
      (() => {
        const _fetch = globalThis.fetch;
        globalThis.fetch = Object.setPrototypeOf(async function fetch(...args) {
          return fetch.apply(this, args);
        }, _fetch);
      })();
    })();

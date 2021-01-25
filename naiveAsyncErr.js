//naiveAsyncErr.js

const api = require('./api.js');

// Not an error-first callback
let callbackFunc = (data) => {
   console.log(`Something went right. Data: ${data}\n`);
};
  
try {
  api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch(err) {
  console.log(`Something went wrong. ${err}\n`);
}

//bash

$ node naiveAsyncErr.js
Running naiveErrorProneAsyncFunction with input: problematic input...

/home/ccuser/workspace/node-errors/api.js:20
        throw new Error('whoops')
        ^

Error: whoops
    at Timeout.setTimeout [as _onTimeout] (/home/ccuser/workspace/node-errors/api.js:20:15)
    at ontimeout (timers.js:386:14)
    at tryOnTimeout (timers.js:250:5)
    at Timer.listOnTimeout (timers.js:214:5)
$ 



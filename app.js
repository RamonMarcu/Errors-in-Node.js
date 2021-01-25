//app.js

const api = require('./api.js');

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};

api.errorProneAsyncApi('problematic input', errorFirstCallback);


//bash

$ node app.js
Running errorProneAsyncApi with input: problematic input...

Something went wrong. Error: whoops

$ 

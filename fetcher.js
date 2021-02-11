const arg = process.argv.slice(2);
const fs = require('fs');
const request = require('request');


const url = arg[0];
const location = arg[1];

request(url, function(error, response, body) {
  let copy = "";
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  copy += body;
  fs.writeFile(location, copy, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(`Downloaded and saved to ${location}`)
  });
});




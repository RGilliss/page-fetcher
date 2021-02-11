const arg = process.argv.slice(2);
const fs = require('fs');
const request = require('request');


const url = arg[0];
const file = arg[1];
let write = "";
// let downloaded = fs.statSync(file);
// const size = downloaded.size
request(url, (error, response, body) => {
  console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode);
  write += body;
  return write;
});



setTimeout(() => {
  fs.writeFile(file, write, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log(`Downloaded and saved to ${file}`)
  });

}, 500);


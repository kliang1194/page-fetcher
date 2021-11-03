let input = process.argv.slice(2);
let url = input[0];
let path = input[1];

const request = require('request');
request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const fs = require('fs');
  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
      return;
    } console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
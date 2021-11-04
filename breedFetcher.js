const request = require('request');
const arg = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, function(error, response, body) {
  //console.log('body:', body);
  if (error !== null) {
    console.log("Error Request Failed");
    process.exit();
  }

  if (body.length > 0) {
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    console.log(data[0].description);
  } else {
    console.log("Breed Not Found");
  }

});


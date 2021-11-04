const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('body:', body);

    if (error !== null) {
      callback(error, null);
    }
  
    const data = JSON.parse(body);
    if (data.length > 0) {
      callback(error, data[0].description);
    } else {
      callback("Breed Not Found", null);
    }
  
  });
};

module.exports = { fetchBreedDescription };

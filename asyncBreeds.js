// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('Callback: I have the data!')
    callback(data);
  });
}

breedDetailsFromFile('Sapphire', (data) => {
  console.log('Return Value: ', data);
});

module.exports = breedDetailsFromFile;
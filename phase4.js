var fs = require("fs");


episode = JSON.parse(fs.readFileSync("./episodeS01E01"));

console.log(episode[0]);

const newObject = episode.reduce(function (result, item, index) {
    // split string on : aka splitting item -> name, text
    // splitString = ["Timestamp residiue:", "Name:", "Greeting"]
    //
    splitString = item.split(":");
    result[splitString[1]+index] = splitString[2];
    return result;
}, {})


// for (let index = 0; index < episode.length; index++) {
//     const element = episode[index];
//     console.log(element);
    
// }

for (const property in newObject) {
    console.log(`${property}: ${newObject[property]}`);
}


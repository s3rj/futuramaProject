var fs = require("fs");


speakers = JSON.parse(fs.readFileSync("./testSpeakers"));

var counts = {};
speakers.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });


keysSorted = Object.keys(counts).sort(function(a,b){return counts[a]-counts[b]})
// console.log(keysSorted); 

for (i = 0; i<keysSorted.length; i++){
    console.log(keysSorted[i]+" "+counts[keysSorted[i]])
}
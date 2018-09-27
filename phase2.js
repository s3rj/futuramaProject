var axios = require("axios");
var cheerio = require("cheerio");
var fs = require("fs");

var site = "https://theinfosphere.org";


episodes = JSON.parse(fs.readFileSync("./testEpisodes"));
episodes = episodes.slice(0,72)
console.log(episodes[0])
console.log(episodes[1])
console.log(episodes[71])



// cheerio code to select speakers and utterance, for the first 
//report, we may just count utterances
//then words, etc. 

var getSpeakers = function(){
    var speakers = [];
    episodes.forEach(function(element){
        console.log(element)
        axios.get(site+element).then(function(response){
            var $ = cheerio.load(response.data);
            $(".poem").each(function(i,element){
                var speaker = $(this).find("b").text();
                speakers.push(speaker);
            });
            
        console.log(speakers.length)

        });

    });
    setTimeout( function(){
        speakers = JSON.stringify(speakers);
        fs.writeFileSync("./testSpeakers",speakers)
        console.log(1);
      }, 50000 );
    return speakers;
};



getSpeakers();


// axios.get(site+episodes[0]).then(function(response){
//     var $ = cheerio.load(response.data);
//     $(".poem").each(function(i,element){
//         var speaker = $(this).find("b").text();
//         var utterance = $(this).find("p").text();
//         console.log(speaker);
//         console.log(utterance);
//         console.log("test");
//     });
// });







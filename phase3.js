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
//report, we may just count utterences
//then words, etc. 



var getSpeakerUtterences = async ()=> {
    utterences = [];
    response = await axios.get(site + episodes[0])
    var $ = cheerio.load(response.data);
    var p = $(".poem").each(function(i,element){
        utterences.push(JSON.stringify($(this).find("p").text()));
    });
    console.log(utterences[0]);
    fs.writeFileSync("./episodeS01E01", JSON.stringify(utterences))
};


getSpeakerUtterences();
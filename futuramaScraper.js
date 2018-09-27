var axios = require("axios");
var cheerio = require("cheerio");
const fs = require("fs");
var transcriptsTable= "https://theinfosphere.org/Episode_Transcript_Listing";
var site = "https://theinfosphere.org";



var getEpisodes = function(){
    return axios.get(transcriptsTable).then(function(response){
  
    var $ = cheerio.load(response.data);
    var episodes = [];
    $("a","b").each(function(i,element){
        
        var link = $(this).attr("href");
        episodes.push(link);
    
    });
    episodes = episodes.slice(0,117)
    episodes = JSON.stringify(episodes)
    console.log(episodes.length);
    fs.writeFileSync("./testEpisodes", episodes);
    
    return episodes;
    
});
};

getEpisodes();



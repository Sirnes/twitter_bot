console.log('The bot is starting');

var Twit= require('twit');

var config = require('./config');
var T= new Twit(config);



tweetIt();
setInterval(tweetIt, 1000*60*30)
function tweetIt() {

   var r= Math.floor(Math.random()*100);

var tweet= {
status: 'Hello Dulce <3 I am a bot. Random tweet interval number: ' + r + ' #nodejs #javascript'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
  if (err) {
    console.log("Something went wrong!");
  } else{
  console.log(" It worked!")
}
}
}

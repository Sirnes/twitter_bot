console.log('The bot is starting');

var Twit= require('twit');

var config = require('./config');
var T= new Twit(config);


tweetIt();
setInterval(tweetIt, 1000*90*30)
function tweetIt() {

   var r= Math.floor(Math.random()*100);

var dickson= {
status: 'Let go or be dragged.\n\n - Zen Proverb'
}

tweetIt();
setInterval(tweetIt, 1000*220*30)
function tweetIt() {

   var r= Math.floor(Math.random()*100);

var emilly= {
status: 'The problem with winning the rat race is: you’re still a rat.\n\n  -Lily Tomlin'
}

tweetIt();
setInterval(tweetIt, 1000*480*30)
function tweetIt() {

   var r= Math.floor(Math.random()*100);

var tweet= {
status: 'The future belongs to those who believe in the beauty of their dreams.\n\n - Eleanor Roosevelt'
}


T.post('statuses/update', tweet, dickson, emilly, tweeted);

function tweeted(err, data, response){
  if (err) {
    console.log("Something went wrong!");
  } else{
  console.log(" It worked!");
}
}
}
}
}


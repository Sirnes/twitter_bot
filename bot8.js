console.log('The bot is starting');

var Twit= require('twit');

var config = require('./config');
var T= new Twit(config);


tweetIt();
setInterval(tweetIt, 1000*90*30)
function tweetIt() {

   var r= Math.floor(Math.random()*100);

var dickson= {
status: 'Im nobody! Who are you? Are you nobody, too? Then there s a pair of us - dont tell! They d banish us, you know.'
}

tweetIt();
setInterval(tweetIt, 1000*220*30)
function tweetIt() {

   var r= Math.floor(Math.random()*100);

var emilly= {
status: 'Heart! We will forget him! You an I, tonight! You may forget the warmth he gave, I will forget the light. When you have done, pray tell me That I my thoughts may dim; Haste! lest while you are lagging. I may remember him!'
}

tweetIt();
setInterval(tweetIt, 1000*480*30)
function tweetIt() {

   var r= Math.floor(Math.random()*100);

var tweet= {
status: 'Hello dear Georgie. I wish you a beautiful blue sky day. For me I wish dark grey clouds and too much rain. #nodejs #javascript'
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


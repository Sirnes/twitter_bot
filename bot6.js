console.log('The reply bot is starting');

var Twit= require('twit');

var config = require('./config');
var T= new Twit(config);

var stream = T.stream('user');

stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg){
//var fs =require('fs')
//var json = JSON.stringify(eventMsg,null,2);
//fs.writeFile("tweet.json", json);

var replyto =eventMsg.in_reply_to_screen_name;
var text = eventMsg.text;
var from = eventMsg.user.screen_name;

console.log(replyto + ' ' + from);

if (replyto ==='Sirnes Bot'){
  var newtweet= '@' + from + ' Thank you for your message.I am very happy';
  tweetIt(newtweet);
}

  }

function tweetIt(txt) {
var tweet = {
status: txt
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
  if (err) {
    console.log("Something went wrong!");
  } else{
  console.log(" It worked!");
}
}
}

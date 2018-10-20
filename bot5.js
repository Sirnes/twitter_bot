console.log('The follow bot is starting');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var stream = T.stream('user');

var my_screen_name = null;

T.get('account/verify_credentials', {skip_status: true }, function(err, data, response){
 my_screen_name = data.screen_name;
console.log('Using account ' + my_screen_name);
});

stream.on('follow', followed);

function followed(eventMsg) {
  console.log("Follow event!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;

  if (screenName !== my_screen_name){



    tweetIt('.@' + screenName + ' Thank you for follow me dude. I am a Node JS bot. Do you like bots?');
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

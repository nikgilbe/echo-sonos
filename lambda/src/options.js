// If you setup basic auth in node-sonos-http-api's settings.json, change the username
// and password here.  Otherwise, just leave this alone and it will work without auth.
var auth = new Buffer("YOUR_USERNAME" + ":" + "YOUR_PASSWORD").toString("base64");

var options = {
  appid: "amzn1.ask.skill.a8ef01a3-fcdd-47b7-8444-131d8d20177a",
  host: "nikgilbe.ddns.net",
  port: "5005",
  headers: {
      'Authorization': 'Basic ' + auth,
      'Content-Type': 'application/json'
  },
  useHttps: false, // Change to true if you setup node-sonos-http-api with HTTPS
  rejectUnauthorized: true, // Change to false if you self-signed your certificate
  defaultRoom: '"Living Room"',				        // Allows you to specify a default room when one is not specified in the utterance 	
  defaultMusicService: 'Spotify', // Supports presets, apple, spotify, deezer, or library
  advancedMode: true,             // Allows you to specify and change default rooms and music services. Requires additional AWS setup
  useSQS: false   // Use AWS SQS and node-sqs-proxy for secure communications
};

module.exports = options;

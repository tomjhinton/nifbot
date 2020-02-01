require('dotenv').config()
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.API_key,
  consumer_secret: process.env.API_secret_key,
  access_token_key: process.env.Access_token,
  access_token_secret: process.env.access_token_secret
})

require('dotenv').config()
var Twitter = require('twitter')
const axios = require('axios')

var client = new Twitter({
  consumer_key: process.env.API_key,
  consumer_secret: process.env.API_secret_key,
  access_token_key: process.env.Access_token,
  access_token_secret: process.env.access_token_secret
})

let ans =

axios.get(`http://api.giphy.com/v1/gifs/search?api_key=${process.env.giphy_key}&q=next%20in%20fashion&limit=100`)
  .then(response => {
    // console.log(response.data.data[0].images['fixed_height'].url)
    ans =response.data.data.filter(x=> x.slug.includes('netflix-fashion-designer'))[Math.floor(Math.random()*response.data.data.length)-1].bitly_gif_url
    console.log(ans.length)
    client.post('statuses/update', {status: ans},  function(error, tweet, response) {
  if(error) throw error;
  // console.log(tweet);  // Tweet body.
  // console.log(response);  // Raw response object.
});

  })
  .catch(error => {
    console.log(error);
  })
//console.log(ans)

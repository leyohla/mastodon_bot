//Send POST request

require('dotenv').config();
const Mastodon = require('mastodon-api');
var request = require('request');

console.log("Mastodon Bot starting...");

const M = new Mastodon({
    access_token: process.env.ACCESS_TOKEN,
    client_key: process.env.CLIENT_KEY,
    client_secret: process.env.CLIENT_SECRET,
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    api_url: 'https://botsin.space/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
  })

  //const params = {
  //      status: "Well, if by that you mean we should create a whole new form of communication, then I couldn't agree more"
  //}

  const options = {
    method: 'GET',
    url: 'https://hargrimm-wikihow-v1.p.rapidapi.com/steps',
    qs: {count: '3'},
    headers: {
      'X-RapidAPI-Key': '5f796e944bmsh091da3c4722237ap189ac3jsna3b994429fae',
      'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com',
      useQueryString: true
    },
    content: "qs"
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
  });

    const params = {
      status: request.response
    }
    //console.log(options.url);

    M.post('statuses', params, (error, params) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(params);
    }
    });

  //M.post('statuses', params, (error, data) => {
    //    if (error) {
      //      console.log(error);
        //}
       // else {
       //     console.log(data);
       // }
  //});

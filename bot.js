const Mastodon = require('mastodon-api');

console.log("Mastodon Bot starting...");

const M = new Mastodon({
    client_key: '8niweoTfOF_umD6nRKHphew3R5VhThXnOq31I9ZYyhM',
    client_secret: 'RyTHGcRxDsV16sKRCqlBYJqaOUTCyqGr4OnkduSqJLc',
    access_token: 'AVc4G-rPbl6ebM53P7pviyDWKmTxJCEGm2rQQpBYWa0',
    timeout_ms: 60*1000,  // optional HTTP request timeout to apply to all requests.
    api_url: 'https://botsin.space/api/v1/', // optional, defaults to https://mastodon.social/api/v1/
  })

  const params = {
        status: "Well, if by that you mean we should create a whole new form of communication, then I couldn't agree more"
  }

  M.post('statuses', params, (error, data) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(data);
        }
  });
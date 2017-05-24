require('dotenv').config()
var au = require('../models/posting')

module.exports = {
  search : (req, res)=>{
    au.data((oauth)=>{
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${encodeURIComponent(req.body.search)}`,
      process.env.ENV_TOK, //test user token
      process.env.ENV_TOKSEC, //test user secret
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      });
    })
  }
}

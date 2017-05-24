require('dotenv').config()
var au = require('../models/posting')

module.exports = {
  recent : (req, res)=>{
    au.data((oauth)=>{
    oauth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${encodeURIComponent(req.params.account)}&count=${encodeURIComponent(req.params.recenttweetlimit)}`,
      process.env.ENV_TOK, //test user token
      process.env.ENV_TOKSEC, //test user secret
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      });
    })
  }
}

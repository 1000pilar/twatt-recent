require('dotenv').config()
var au = require('../models/posting')

module.exports = {
  posting : (req, res)=>{
    au.data((oauth)=>{
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json?status=${encodeURIComponent(req.body.posting)}`,
      process.env.ENV_TOK, //test user token
      process.env.ENV_TOKSEC, //test user secret
      req.body.posting,
      'text',
      function (e, data){
        if (e) console.error(e);
        res.send(data)
      });
    })
  }
}

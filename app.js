var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var twitter = require('./routes/api')


app.get('/', (req, res)=>{
  res.send(`We now connected to twitter`)
})

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/twitter', twitter)


app.listen(3000)
console.log(`Aplication run on port: 3000`);

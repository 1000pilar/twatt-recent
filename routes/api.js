var express = require('express')
var router = express.Router()
var controllerSearch = require('../controllers/controllerSearch')
var controllerRecent = require('../controllers/controllerRecentTweet')
var controllerPosting = require('../controllers/controllerPosting')



router.post('/search', controllerSearch.search)
router.get('/:account/:recenttweetlimit', controllerRecent.recent)
router.post('/posting', controllerPosting.posting)


module.exports = router

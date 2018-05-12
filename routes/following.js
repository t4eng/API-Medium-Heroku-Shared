const express = require('express'),
  router = express.Router(),
  request = require('request')

var JSON_HIJACKING_PREFIX = '])}while(1);</x>'

router.get('/getFollowing', (req, res) => {
  request.get({
    url: 'https://medium.com/@' + req.headers.username + '/following?format=json',
  }, (err, httpResponse, body) => {
    var bodyCV = JSON.parse(body.replace(JSON_HIJACKING_PREFIX, ''));
    res.send(bodyCV)
    console.log(bodyCV)
  })
})

module.exports = router
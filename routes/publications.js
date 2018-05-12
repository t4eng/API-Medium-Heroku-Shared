const express = require('express'),
    router = express.Router(),
    request = require('request')

router.get('/getPublications', (req, res) => {
    request.get({
        url: 'https://api.medium.com/v1/users/' + req.headers.iduser + "/publications",
        headers: {
            'Authorization': req.headers.authorization,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }, (err, httpResponse, body) => {
        res.send(body);
        console.log(body)
    })
})
module.exports = router
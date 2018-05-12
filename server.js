const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    router = express.Router()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.all("/*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'iduser, username, Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.get('/', (req,res) =>{
    res.send("<h1>API-Medium-Backend</h1>");  
})

app.use(require('./routes/user'))
app.use(require('./routes/publications'))
app.use(require('./routes/following'))
app.use(require('./routes/followers'))

app.listen(process.env.PORT||3000,()=> console.log('run server success !!!'))
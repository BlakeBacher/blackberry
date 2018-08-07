require('dotenv').config()
const express = require('express')
    , session = require('express-session')
    , bodyparser = require('body-parser')
    , controller = require('./controller')



const { 
        SERVER_PORT,
    } = process.env;


const app = express();

app.use(bodyparser.json())


app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: `, SERVER_PORT)
})

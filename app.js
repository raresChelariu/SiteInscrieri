const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const router = require('./routes')

const ENV = process.env.NODE_ENV || "dev"
const config = dotenv.config({
    path: `./configs/${ENV}.env`
}).parsed

const app = express();
mongoose
    .connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to database')
    })

const db = require('./models')

app.use((req, res, next) => {
    req.db = db;
    next()
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

app.listen(config.PORT, () =>
    console.log(`Listening on port ${config.PORT}...`)
)
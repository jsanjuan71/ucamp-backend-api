const dotenv = require('dotenv')
dotenv.config()

require('./config/database')

const express = require('express')

const cors = require('cors')
const Video = require('./models/video.model')
const { categories } = require('./tools/data.constants')

const app = express()

app.use( cors() )

//const https = require('https')
//https.createServer(app).listen(443)

/* REST no le gusta **/
//app.get('/Users', (req, res) => {})
//app.get('/UserByID', (req, res) => {})


/** Cumple con filosofia REST */
app.get("/", (req, res) => {
    res.status(200).json({
        config: process.env.MONGODB_CONNECTION_STRING,
        message: "Hello World",
        error: false
    })
})

app.get("/videos", async (req, res)=> {
    const videos  = await Video.find()
    res.json({
        message: videos,
        error: false
    })
})

app.get("/users", (req, res) => {
    res.json({ 
        message: ["user1", "user2", "user3"],
        error: false
    })
})

app.get("/tools/categories", (req, res) => {
    res.json({
        message: categories.map( category => {
            return {
                value: category.toLowerCase(),
                label: category
            }
        }),
        error: false
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
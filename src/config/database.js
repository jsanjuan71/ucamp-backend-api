const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
})

mongoose.connection.on('error', (err) => {
    console.error("Mongoose error", err)
})
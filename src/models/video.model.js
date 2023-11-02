const mongoose = require('mongoose');
const { categories } = require('../tools/data.constants');

// _id
// createdAt
// updatedAt

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 500
    },
    url: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 500
    },
    thumbnail: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 500
    },
    views: {
        type: Number,
        default: 0
    },
    category: {
        String,
        enum: categories
    },
})

const Video = mongoose.model('Video', videoSchema)

module.exports = Video
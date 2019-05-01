const mongoose = require('../db/connection')

const Language = new mongoose.Schema({
    name: String,
    nativeName: String
})

module.exports = mongoose.model('Language', Language)
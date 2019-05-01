const mongoose = require('../db/connection')

const Currency = new mongoose.Schema({
    code: String,
    name: String,
    symbol: String
})

module.exports = mongoose.model('Currency', Currency)
const mongoose = require('../db/connection')

const Country = new mongoose.Schema({
    name: String,
    capital: String,
    population: Number,
    currencies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Currency'
        }
    ],
    languages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Language'
        }
    ],
    area: String,
    flag: String
})

module.exports = mongoose.model('Country', Country)
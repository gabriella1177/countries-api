const mongoose = require('../db/connection')

const Country = new mongoose.Schema({
    name: String,
    capital: String,
    population: Number,
    currencies: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Currency'
        }
    ],
    languages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Language'
        }
    ],
    area: String,
    flag: String
})

module.exports = mongoose.model('Country', Country)
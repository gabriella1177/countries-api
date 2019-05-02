const Country = require('../models/Country')
// const Currency = require('../models/Currency')
// const Language = require('../models/Language')

const countries = require('./countries.json')

Country.create(countries).then(newCountry => {
    console.log(newCountry)
})
 
// Currency.create(currency).then(currency => {
//     console.log(currency)
// })

// Language.create(language).then(language => {
//     console.log(language)
// })
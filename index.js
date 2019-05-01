const express = require('express')
const app = express()
const countriesController = require('./controllers/countries')
const currenciesController = require('./controllers/currencies')
const languagesController = require('./controllers/languages')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/countries/', countriesController)
app.use('/api/currencies/', currenciesController)
app.use('/api/languages/', languagesController)


const port = 5000;
app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})
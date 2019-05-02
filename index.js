const express = require('express')
const app = express()
const countriesController = require('./controllers/countries')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/countries/', countriesController)

const port = 5000;
app.listen(port, function(){
    console.log(`Server running on port ${port}`)
})
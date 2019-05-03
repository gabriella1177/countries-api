const express = require('express')
const app = express()
const countriesController = require('./controllers/countries')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/countries/', countriesController)

app.set("port", process.env.PORT || 3001)

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
})
const express = require('express')
const app = express();
const router = express.Router()

const Currency = require('../models/Currency')

router.get('/', (req, res) => {
    Currency.find({}).then(allcurrencies => {
        res.json(allcurrencies)
    })
})

//list a single currency
router.get('/:id', (req, res) => {
    Currency.findById({_id: req.params.id}).then(currency => {
        res.json(currency)
    })
})

// Create a currency
router.post('/', (req, res) => {
    Currency.create(req.body).then(currency => {
        res.json(currency)
    })
})

// Update a currency by id
router.put('/update/:id', (req, res) => {
    Currency.findOneAndUpdate({_id: req.params.id}, req.body).then(currency => {
        res.json(currency)
    })
})

// Delete a currency by id
router.delete('/delete/:id', (req,res) => {
    Currency.findOneAndDelete({_id: req.params.id}, req.body).then(currency => {
        res.json(currency)
    })
})


module.exports = router
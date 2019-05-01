const express = require('express')
const router = express.Router()

const Country = require('../models/Country')

router.get('/', (req, res) => {
    Country.find({}).then(allcountries => {
        res.json(allcountries)
    })
})

//list a single country
router.get('/:id', (req, res) => {
    Country.findById({_id: req.params.id}).then(country => {
        res.json(country)
    })
})

// Create a country
router.post('/', (req, res) => {
    Country.create(req.body).then(country => {
        res.json(country)
    })
})

// Update a country by id
router.put('/update/:id', (req, res) => {
    Country.findOneAndUpdate({_id: req.params.id}, req.body).then(country => {
        res.json(country)
    })
})

// Delete a country by id
router.delete('/delete/:id', (req,res) => {
    Country.findOneAndDelete({_id: req.params.id}, req.body).then(country => {
        res.json(country)
    })
})


module.exports = router
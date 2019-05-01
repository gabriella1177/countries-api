const express = require('express')
const router = express.Router()

const Language = require('../models/Language')

router.get('/', (req, res) => {
    Language.find({}).then(allanguages => {
        res.json(allanguages)
    })
})

//list a single currency
router.get('/:id', (req, res) => {
    Language.findById({_id: req.params.id}).then(language => {
        res.json(language)
    })
})

// Create a currency
router.post('/', (req, res) => {
    Language.create(req.body).then(language => {
        res.json(language)
    })
})

// Update a currency by id
router.put('/update/:id', (req, res) => {
    Language.findOneAndUpdate({_id: req.params.id}, req.body).then(language => {
        res.json(language)
    })
})

// Delete a currency by id
router.delete('/delete/:id', (req,res) => {
    Language.findOneAndDelete({_id: req.params.id}, req.body).then(language => {
        res.json(language)
    })
})


module.exports = router
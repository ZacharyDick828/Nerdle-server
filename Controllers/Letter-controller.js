// Dependencies
const router = require('express').Router()

// Configuration
const Letter = require('../Models/Letter-model.js')

// Index

router.get('/', (req, res) => {
    Letter.find()
        .then((Letters) => {
            return res.json(Letters)
        })
        .catch((err) => {
            console.log(err)
            res.status(404)
            res.json({ 'message': 'no solution available' })
        })
})



module.exports = router
// Dependencies
const router = require('express').Router()

// Configuration
const Solution = require('../Models/Solution-model.js')

// Index

router.get('/', (req, res) => {
    Solution.find()
        .then((Solutions) => {
            return res.json(Solutions)
        })
        .catch((err) => {
            console.log(err)
            res.status(404)
            res.json({ 'message': 'no solution' })
        })
})



module.exports = router
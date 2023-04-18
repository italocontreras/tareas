const express = require('express')
const {Joke} = require('../models/jokes')
const router = express.Router()

router.get('/api/jokes', async (req, res) => {
    try {
        const jokes = await Joke.find()
        res.json(jokes)
    } catch(error) {
        console.log(error);
    }
})


router.get('/api/jokes/:id', async (req, res) => {
    const id = req.params.id
    try {
        const joke = await Joke.findOne({_id: id})
        return res.json(joke)
    } catch(error) {
        console.log(error)
        return res.json({error}, 404)
    }
})


router.post('/api/jokes/new', async (req, res) => {
    try {
        const new_joke = await Joke.create({
            ...req.body
        })
        res.json(new_joke)
    } catch(error) {
        console.log(error);
    }
})


router.put('/api/jokes/update/:id', async (req, res) => {

    const id = req.params.id  
    const joke = await Joke.updateOne(
        {_id: id},
        { ...req.body }
    )
    return res.json({})
})


router.delete('/api/jokes/delete/:id', async (req, res) => {
    const id = req.params.id

    await Joke.findOneAndRemove({_id: id})
    res.json({})
})


module.exports = router

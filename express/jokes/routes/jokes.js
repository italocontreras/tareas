const express = require('express')

const {Joke} = require('../models/jokes')

const router = express.Router()

router.post('/api/jokes/new', async (req, res) => {
    console.log("post joker new")
    const new_joke = await Joke.create({
        ...req.body
    })
    res.json(new_joke)
})      


// router.get('/api/jokes', async (req, res) => {
// // router.get('/api/jokes', (req, res) => {
//     // const user = create_user()
    
//     console.log("dentro de get apo jokes")

//     // const joke = await Joke.find()
//     // res.send(`User ${user.id} was created`)
//     // res.json(user)
//     // res.json(joke)
//     res.json({
//         "user":"user"
//     })
// })

router.get('/api/jokes', async (req, res) => {
// router.get('/api/jokes', (req, res) => {
    // const user = create_user()
    
    console.log("dentro de get apo jokes")

    // const joke = await Joke.find()
    // res.send(`User ${user.id} was created`)
    // res.json(user)
    // res.json(joke)
    res.json({
        "user":"user"
    })
})

router.get('/api/jokes/test', async (req, res) => {
    // router.get('/api/jokes', (req, res) => {
        // const user = create_user()
        
        console.log("dentro de get apo jokes")
    
        // const joke = await Joke.find()
        // res.send(`User ${user.id} was created`)
        // res.json(user)
        // res.json(joke)
        res.json({
            "user":"user"
        })
    })

// router.get('/api/jokes', async (req, res) => {
//     const cars = await Car.find()
//     res.json(cars)
//     })


module.exports = router
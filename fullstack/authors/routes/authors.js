const express = require('express')
const {Author} = require('../models/authors')
const router = express.Router()

router.get('/authors', async (req, res) => {
    try {
        const authors = await Author.find()
        res.json(authors)
    } catch(error) {
        console.log(error);
    }
})


router.get('/authors/:id', async (req, res) => {
    console.log("dentro del get id")
    const id = req.params.id
    try {
        const author = await Author.findOne({_id: id})
        return res.json(author)
    } catch(error) {
        console.log(error)
        return res.json({error}, 404)
    }
})

router.post('/authors/new', async (req, res) => {
    try {
        const new_author = await Author.create({
            ...req.body
        })
        res.json(new_author)
    } catch(error) {
        console.log(error);
    }
})


router.put('/authors/edit/:id', async (req, res) => {

    const id = req.params.id  
    const author = await Author.updateOne(
        {_id: id},
        { ...req.body }
    )
    return res.json({})
})


router.delete('/authors/delete/:id', async (req, res) => {
    const id = req.params.id

    await Author.findOneAndRemove({_id: id})
    res.json({})
})


module.exports = router

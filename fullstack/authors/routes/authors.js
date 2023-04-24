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

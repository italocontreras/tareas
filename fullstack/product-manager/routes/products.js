const express = require('express')
const {Product} = require('../models/products')
const router = express.Router()

router.get('/api/products', async (req, res) => {
    try {
        // const products = await Product.find()
        const products = await Product.find()
        res.json(products)
    } catch(error) {
        console.log(error);
    }
})



router.post('/api/products/new', async (req, res) => {
    try {
        const new_product = await Product.create({
            ...req.body
        })
        res.json(new_product)
    } catch(error) {
        console.log(error);
    }
})

router.get('/api/products/:id', async (req, res) => {
    console.log("dentro del get id")
    const id = req.params.id
    try {
        const product = await Product.findOne({_id: id})
        return res.json(product)
    } catch(error) {
        console.log(error)
        return res.json({error}, 404)
    }
})

router.put('/api/products/edit/:id', async (req, res) => {

    const id = req.params.id  
    const product = await Product.updateOne(
        {_id: id},
        { ...req.body }
    )
    return res.json({})
})

router.delete('/api/products/delete/:id', async (req, res) => {
    const id = req.params.id

    await Product.findOneAndRemove({_id: id})
    res.json({})
})



module.exports = router

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



module.exports = router

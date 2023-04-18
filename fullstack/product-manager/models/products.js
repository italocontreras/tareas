const mg = require('./db.js')


const Product = mg.model('Product',mg.Schema({
    title: String,
    price: Number,
    description: String
}))


module.exports = {
    Product
}   
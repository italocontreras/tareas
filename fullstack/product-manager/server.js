const express = require('express')
const cors = require('cors')

const app = express()
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(cors())

const products_router = require('./routes/products')

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
// });

app.use(products_router)

app.listen(8000, function () {
    console.log("Servidor ejecutando en el puerto 8000")
})
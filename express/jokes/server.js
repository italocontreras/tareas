const express = require('express')
const app = express()
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// const car_router = require('./routes/cars')
const jokes_router = require('./routes/jokes')

app.use(jokes_router)

app.listen(8000, function () {
    console.log("Servidor ejecutando en el puerto 8000")
})
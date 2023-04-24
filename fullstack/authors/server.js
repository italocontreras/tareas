const express = require('express')
const cors = require('cors')


const app = express()


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.use(cors())


app.use('/api', require('./routes/authors.js'))

// const authors_router = require('./routes/authors')
// app.use(authors_router)

app.listen(8000, function () {
    console.log("Servidor ejecutando en el puerto 8000")
})
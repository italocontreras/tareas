const mg = require('./db.js')


const Author = mg.model('Author',mg.Schema({
    name: {
        type: String,
        required: true
    }
}))


module.exports = {
    Author
}
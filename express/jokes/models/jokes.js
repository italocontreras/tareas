const mg = require('./db.js')


const Joke = mg.model('Joke',mg.Schema({
    setup: String,
    punchine: String
}))
// },{timestamps: true}))

module.exports = {
    Joke
}
// const {default:mongoose,connect} = require('mongoose')

const mg = require('mongoose')

mg.connect(
    // 'mongodb://localhost:27017/jokes',
    'mongodb://localhost:27017/test',
    {useNewUrlParser:true,useUnifiedTopology:true}
)
.then(()=>console.log("ya estamos conectados a la bd"))
.catch(error => console.log("Error de Mongoose",error))

module.exports = mg
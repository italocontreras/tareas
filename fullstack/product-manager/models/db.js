const mg = require('mongoose')

mg.connect(
  // 'mongodb://localhost/testproducts',
  'mongodb://127.0.0.1:27017/testproducts',
  // 'mongodb://0.0.0.0:27017/testproducts',
  {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("Ya estamos conectados a la Base de datos"))
.catch(error => console.log("Error de Mongoose", error))

module.exports = mg
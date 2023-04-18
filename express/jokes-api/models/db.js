const mg = require('mongoose')

mg.connect(
  // 'mongodb://localhost:27017/test',
  'mongodb://0.0.0.0:27017/test',
  {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => console.log("Ya estamos conectados a la Base de datos"))
.catch(error => console.log("Error de Mongoose", error))

module.exports = mg
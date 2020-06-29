let mongoose = require('mongoose');

let UsuarioSchema = new mongoose.Schema({
    nombre: String,
    email: {
        type: String, unique: true
    },
    password: String
})

module.exports = mongoose.model('Usuario', UsuarioSchema);
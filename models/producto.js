let mongoose = require('mongoose');

let ProductoSchema = new mongoose.Schema({
    sku: {type: String, unique: true},
    nombre: String,
    descripcion: String,
    categoria: String,
    pics: [{type: String}],
    tallas: [{type: String}],
    colores: [{type: String}],
    etiquetas: [{type: String}],
    precio: Number
})

module.exports = mongoose.model('Producto', ProductoSchema);


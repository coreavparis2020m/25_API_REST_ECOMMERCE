let express = require('express');
let app = express();

let Producto = require('../models/producto');

app.post('/', (req, res) => {

    let producto = new Producto({
        sku: req.body.sku,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        pics: req.body.pics,
        tallas: req.body.tallas,
        colores: req.body.colores,
        etiquetas: req.body.etiquetas,
        precio: req.body.precio
    })

    producto.save((error, productoSaved) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }
        res.status(200).json({
            mensaje: 'El producto ha sido creado'
        })
    })
})

module.exports = app;
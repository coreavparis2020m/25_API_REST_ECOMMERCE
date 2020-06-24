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

app.get('/', (req, res) => {

    Producto.find({}, (error, productos) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }

        res.status(200).json({
            productos: productos
        })

    })
})

app.get('/:_id', (req, res) => {

    Producto.findById(req.params._id, (error, producto) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }

        res.status(200).json({
            producto: producto
        })
    })

})

module.exports = app;
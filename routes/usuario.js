let express = require('express');

let app = express();

let bcryptjs = require('bcryptjs');

let Usuario = require('../models/usuario');

app.post('/', (req, res) => {

    let usuario = new Usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcryptjs.hashSync(req.body.password, 10)
    })

    usuario.save((error, usuarioSaved) => {
        if (error) {
            return res.status(400).json({
                error: error
            })
        }

        res.status(200).json({
            mensaje: 'El usuario fue creado correctamente'
        })
    })
})

module.exports = app;
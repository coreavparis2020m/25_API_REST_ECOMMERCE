let express = require('express');
let bcryptjs = require('bcryptjs');

let Usuario = require('../models/usuario');

let app = express();

app.post('/', (req, res) => {

    Usuario.findOne({email: req.body.email}, (error, usuario) => {
        if(error) {
            return res.status(500).json({
                error: error,
                mensaje: 'El servidor de base de datos no responde'
            })
        }

        if(!usuario) {
            return res.status(400).json({
                mensaje: 'El email no corresponde a ningún usuario'
            })
        }

        if(!bcryptjs.compareSync(req.body.password, usuario.password)) {
            return res.status(400).json({
                mensaje: 'La contraseña no es correcta'
            })
        }

        res.status(200).json({
            usuario: usuario
        })
    })
})

module.exports = app;
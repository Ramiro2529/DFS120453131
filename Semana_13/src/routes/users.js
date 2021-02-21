const express = require('express');
const { modelNames } = require('mongoose');
const passport = require('passport');
const router = express.Router();
const User = require('../model/usuario');

router.get('/Signup', (req, res) => {
    res.render('Signup.hbs')
});



router.get('/usuarios/Singup', (req, res) => {
    res.render('/usuario/nuevo')


})





router.get('/usuario/', (req, res, next) => {
    res.send("usuarios desde la bd");
});

router.get('/usuario/entrar', (req, res) => {
    res.render('usuario/login.hbs');
})

router.get('/usuario/nuevo', (req, res) => {
    res.render('usuario/Singup.hbs');
})

router.post('/usuario/nuevo', async(req, res, next) => {
    console.log(req.body);
    res.send("Holi");
    let errors = [];
    const { nombreUsuario, email, password, confirmPassword } = req.body;


    if (nombreUsuario.length <= 1) {
        errors.push({ text: 'EL nombre es muy corto' })
    }
    if (email.length <= 0) {
        errors.push({ text: 'el correo esta vacio' })
    }
    if (password.length < 8) {
        errors.push({ text: 'El password debe de contener por lo menos 8 caracteres' })
    }
    if (password.length < 8) {
        errors.push({ text: 'Lac confirmacion del password debe contener por lo menos 8 caracteres' })
    }

    if (errors.length > 0) {
        res.send('El usuario ya existe');
        console.log(
            errors.forEach(elemt => {
                console.log(elemt);
            })
        );
    } else {

        const mailUser = await User.findOne({ email: email });
        if (mailUser) {
            res.flash('errorMessage', 'El error ya esta registrado');
        } else {
            //crear del lado del servidor
            console.log('Empezar a crear usuario');
            //1er paso creacion del objeto
            const newUser = new User({ nombreUsuario, email, password });
            console.log(newUser);
            //Create de lado de la bs
            //2do se uarda el objeto dentro de la bd
            await newUser.save(); //crear un usuario dentro de la bd
        }
    }

});

module.exports = router;
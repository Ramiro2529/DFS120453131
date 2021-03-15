const express = require('express'); 
const passport = require('passport'); 
const router = express.Router(); 
const User  = require('../model/User'); 


router.get('/users', (req, res) =>{
    res.send("Usuarios desde la BD"); 

}); 


router.get('/users/entrar', 
(req, res) => { res.render('users/Login.hbs')}); 

router.get('/users/nuevo', 
(req, res) => { res.render('users/Signup.hbs')}); 


router.post('/users/nuevo',async(req, res, next) =>{
    console.log(req.body); 
   // res.send("HOli");
    let errors = []; 
    const {nombreUsuario, email, password, confirmPassword } = req.body; 
   

    if(nombreUsuario.length <= 1 ){
        errors.push({text : 'El nombre es muy corto'})
    }
    if(email.length <= 0 ){
        errors.push({text : 'El correo esta vacio'})
    }
    if(password.length < 8 ){
        errors.push({text : 'El password debe contener por lo menos 8 caracteres'})
    }
    if(password.length < 8 ){
        errors.push({text : 'La confirmacion del password debe contener por lo menos 8 caracteres'})
    }


    if(errors.length > 0 ) { 
        res.render('/users/nuevo', {errors, nombreUsuario, password, email})
        console.log('ERROR');
    }else{
        // Verificamos que no tengamos un usuario registrado

        const mailUser = await User.findOne({email: email}); 
        console.log('Se verifica que no exista un usuario')
        if(mailUser){
            console.error('El usuario ya existe'); 
            errors.push({text : 'El usuario ya existe'});
            //errors.forEach(element =>       req.flash('errorMessage', element););
            req.flash('errorMessage', 'El correo ya esta registrado'); 
      
            res.redirect('/users/nuevo');
        }else{
            console.log('El usuario no existe')
            // CRUD 
            // CREATE  (SOLAMENTE DEL LADO DEL SERVIDOR)
            console.log('Empezar a crear a Usuario'); 
            //1er paso creacion del objeto
            const newUser = new User({nombreUsuario, email, password});  // CREAR UN OBJETO EN BASE A LA CLASE USUARIO
            //Encriptamos el pass del usuario
            newUser.password = await newUser.encryptPassword(password);
            console.log(newUser); 
            //CREATE DE LADO DE LA BD 
            //2do paso guardar al objeto dentro de la BD 
            await newUser.save(); // crear un usuario dentro de la bd 
            req.flash('successMessage', 'Usuario registrado exitosamente'); 
            res.redirect('/users/nuevo');
        }


    }

});

router.post('/users/entrar',  passport.authenticate('local', {
    successRedirect: '/usuarios/listaUsuarios', 
    failureRedirect : '/users/entrar', 
    failureFlash :true
})); 


router.get('/usuarios/listaUsuarios', async(req, res) =>{
    const usuarios = await User.find().sort({date: 'desc'}).lean();
  
        res.render('users/ListaUsuarios.hbs', {usuarios});
      
});



module.exports = router; 
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportLocal = require('passport-local');
const operaciones = require('./src/operaciones');
const { request } = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser('secreto'));

app.use(session({

    secret: 'secreto',
    resave: true, //cada sesion que se haga no debe modificarse
    saveUninitialized: true // si se inicializa una petiion vacia la guarda
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(
    new passportLocal(function(username, password, done) {
        console.log(username);
        console.log(password);
        if (username == 'ramiro' && password === '123') {
            return done(null, { id: 'ramiro' });
        } else {
            done(null, false);
        }
    })
);
//serializer
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    done(null, { id: 'ramiro' });

});
//rutas
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('login.ejs');
})

app.get('/login', function(req, res) {
    res.render('login.ejs')


})

app.get('/bienvenida', function(req, res) {

    res.render('bienvenida');
})

app.post('/login', passport.authenticate('local', {

    successRedirect: '/bienvenida',
    failureRedirect: '/login'
}));
//validar credenciales

app.get('/calculadora', function(req, res) {
    res.render('calculadora');
})

app.post('/calculadora', function(req, res) {
    var num1 = req.body.num1
    console.log(num1);
    num1 = parseInt(num1);

    var num2 = req.body.num2;
    console.log(num2);
    num2 = parseInt(num2);

    var operando = req.body.operacionFront;
    console.log(operando);
    operando = parseInt(operando);
    var resultado;
    if (operando === 1) {
        resultado = operaciones.suma(num1, num2);
    }
    if (operando === 2) {
        resultado = operaciones.resta(num1, num2);
    }
    if (operando === 3) {
        resultado = operaciones.multiplicacion(num1, num2);
    }
    if (operando === 4) {
        resultado = operaciones.division(num1, num2);
    }

    console.log(resultado);
    res.render('resultado', { resultado: resultado })





});


app.listen(3000, () => console.log("server levantado"));
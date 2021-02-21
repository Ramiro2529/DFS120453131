const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const user = require('../model/usuario');


passport.use(new LocalStrategy({
    usernameField: 'email'
}, async(email, password, done) => {
    const user = await usuario.findOne({ email: email });
    if (!usuario) {
        return done(null, false, { message: 'User not fund' });
    } else {
        const match = await usuario.matchPassword(password);
        if (match) {
            return done(null, usuario);
        } else {
            return done(null, false, { message: 'Incorrect password' });
        }
    }
}))

passport.serializeUser((usuario, done) => {
    done(null, usuario.id);
})

passport.deserializeUser((id, done) => {
    usuario.findByid(id, (err, usuario) => {
        done(err, usuario);
    })
})
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = require('../model/User');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async(email, password, done) => {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
        console.log('Usuario no encontrado');
        return done(null, false, { message: 'User not found' });

    } else {
        const match = await user.matchPassword(password);
        if (match) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect password' })
        }
    }

}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
})
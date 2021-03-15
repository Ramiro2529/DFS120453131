const express = require('express');
const path = require('path')
const exphs = require('express-handlebars')
const session = require('express-session')
const flash = require('connect-flash')
const methodOverride = require('method-override');
const passport = require('passport');


const app = express();

require('./database');
require('./src/config/passport');


// Configuraciones

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'src/views'));
app.engine('.hbs', exphs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//Middleware
app.use(express.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

app.use(session({
    secret: 'Loquesea',
    resave: true,
    saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


app.use((req, res, next) => {
    res.locals.successMessage = req.flash('successMessage');
    res.locals.errorMessage = req.flash('errorMessage');
    next()
});


// ROUTES 
app.use(require('./src/routes/services'));
app.use(require('./src/routes/products'));
app.use(require('./src/routes/index'));
app.use(require('./src/routes/users'));



// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));

});
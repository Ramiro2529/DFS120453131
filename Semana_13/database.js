const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Crud', {

    useCreateIndex: true,
    useNewUrlParser: true,
    userFindAndModify: false


}).then(db => console.log('conexion exitosa'));
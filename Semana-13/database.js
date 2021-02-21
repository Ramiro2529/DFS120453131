const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Crud', {
    useCreateIndex: true,
    useNewUrlParser: true, 
    useFindAndModify: false
}).then(db => console.log('Conexion exitosa'))
.catch(err=> console.error(err));
const mongoose = require('mongoose');
const { Schema } = mongoose;


const ServiceSchema = new Schema({
    _id: { type: Number, required: true },
    nombreServicio: { type: String, required: true },
    personaEncargada: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    duracion: { type: String, required: true },


    crated_at: { type: Date, default: Date.now() }



});

module.exports = mongoose.model('Servicio', ServiceSchema)
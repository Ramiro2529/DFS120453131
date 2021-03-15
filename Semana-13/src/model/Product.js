const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    _id: { type: Number, required: true },
    nombreProducto: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    created_at: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Product', ProductSchema);
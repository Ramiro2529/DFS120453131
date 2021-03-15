const express = require('express');
const router = express.Router();
const Product = require('./../model/Product');

router.get('/productos/listaProductos', async(req, res) => {
    const products = await Product.find().lean();
    // res.send("La lista de los products");
    res.render('products/listaProductos', { products });
});

router.get('/productos/agregarProducto', (req, res) => {
    res.render('products/agregarProducto');
});


router.post('/productos/agregarProducto', async(req, res) => {
    const { _id, nombreProducto, descripcion, precio, cantidad } = req.body;
    console.log(req.body);
    const erros = [];

    if (!nombreProducto) {
        errors.push({ text: 'Falta nombre' })
    }
    if (erros.length > 0) {
        req.flash('successMessage', errors);
        res.redirect('/productos/listaProductos');

    } else {
        // create

        const newProduct = new Product({ _id, nombreProducto, descripcion, precio, cantidad });
        console.log(newProduct);
        await newProduct.save(); // Guardar en la collection dentro de la BD
        req.flash('successMessage', 'Producto agregado correctamente');
        res.redirect('/productos/listaProductos');
    }
});


//UPDATE 

router.put('/productos/editarProducto/:_id', async(req, res) => {
    const { _id, nombreProducto, descripcion, precio, cantidad } = req.body;
    // encotrar el documento dentro de la collection de productos
    await Product.findByIdAndUpdate(req.params._id, { nombreProducto, descripcion, precio, cantidad });
    req.flash('successMessage', 'Producto editado correctamente');
    res.redirect('/productos/listaProductos');

});


router.get('/productos/editarProducto/:_id', async(req, res) => {
    const updateProduct = await Product.findById(req.params._id).lean();
    console.log(updateProduct);
    res.render('products/editarProducto', { updateProduct });
});


//DELETE
router.get('/productos/eliminarProducto/:_id', async(req, res) => {

    await Product.findByIdAndRemove(req.params._id);
    req.flash('successMessage', 'Prducto eliminado correctamente');
    res.redirect('/productos/listaProductos');

})

module.exports = router;
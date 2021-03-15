const express = require('express');
const router = express.Router();
const Servicio = require('./../model/Service');


router.get('/servicios/listaServicios', async(req, res) => {
    const servicios = await Servicio.find().lean();

    res.render('servicess/listaServicios', { servicios });
});

router.get('/servicios/agregarServicio', async(req, res) => {
    res.render('servicess/agregarServicio');
});

router.post('/servicios/agregarServicio', async(req, res) => {

    const { _id, nombreServicio, personaEncargada, descripcion, precio, duracion } = req.body;
    console.log(req.body);
    const errors = [];

    if (!nombreServicio) {
        errors.push({ text: 'Falta nombre' });
    }
    if (errors.length > 0) {
        req.flash('successMessage', errors);
        res.redirect('/servicios/listaServicios');
    } else {
        //create 

        const newService = new Servicio({ _id, nombreServicio, personaEncargada, descripcion, precio, duracion });
        console.log(newService);
        await newService.save();
        req.flash('successMessage', 'Servicio agregado correctamente');
        res.redirect('/servicios/listaServicios')
    }
});

//UPDATE

router.put('/servicios/editarServicio/:_id', async(req, res) => {
    const { _id, nombreServicio, personaEncargada, descripcion, precio, duracion } = req.body;

    await Servicio.findByIdAndUpdate(req.params._id, { nombreServicio, personaEncargada, descripcion, precio, duracion });
    req.flash('successMessage', 'Producto editado correctamente');
    res.redirect('/servicios/listaServicios');
});

router.get('/servicios/editarServicio/:_id', async(req, res) => {
    const updateService = await Servicio.findById(req.params._id).lean();
    console.log(updateService);
    res.render('servicess/editarServicio', { updateService });
})


//DELETE

router.get('/servicios/eliminarServicio/:_id', async(req, res) => {
    await Servicio.findByIdAndRemove(req.params._id);
    req.flash('successMessage', 'Producto eliminado correctamente');
    res.redirect('/servicios/listaServicios');
})


module.exports = router;
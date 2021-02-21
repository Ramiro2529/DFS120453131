const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.hbs')

});

router.get('/Signin', (req, res) => {
    res.render('login.hbs')
})
router.get('/Signup', (req, res) => {
    res.render('Signup.hbs')
})


module.exports = router;
const express = require('express');
const emailRouter = require('./email.router')
const router = express.Router();

// colocar las rutas aquí

router.use('/emailContact', emailRouter);

module.exports = router;
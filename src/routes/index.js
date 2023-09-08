const express = require('express');
const emailRouter = require('./contact.router')
const router = express.Router();

// colocar las rutas aquí

router.use('/emailContact', emailRouter);

module.exports = router;
const { contact } = require('../controllers/contact.controller');
const express = require('express');

const emailRouter = express.Router();

emailRouter.route('/')
    .post(contact);

module.exports = emailRouter;
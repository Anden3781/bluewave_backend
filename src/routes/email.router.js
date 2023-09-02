const { emailSender } = require('../controllers/sendEmail.controller');
const express = require('express');

const emailRouter = express.Router();

emailRouter.route('/')
    .post(emailSender);

module.exports = emailRouter;
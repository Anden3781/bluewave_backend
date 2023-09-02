const catchError = require('../utils/catchError');
const contactService = require('../services/emailService');

const emailSender = catchError(async(req, res) => {
    const {to, subject} = req.body;
    await contactService.sendMessage({
        to,
        subject
    });
    res.json('Email Sent');
});

module.exports = {
    emailSender
}
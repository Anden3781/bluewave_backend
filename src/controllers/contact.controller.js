const catchError = require('../utils/catchError');
const Contact = require('../models/Contact');
const fs = require('fs');
const sendEmail = require('../utils/sendEmail');

const contact = catchError(async(req, res) => {
    const path = require('path');
    const filePath = path.join(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf-8');

    const {email, message, phoneNumber} = req.body;
    await Contact.create({
        email,
        message,
        phoneNumber
    });

    await sendEmail({
        from: email,
        to: process.env.EMAIL,
        subject: "Nuevo mensaje de contacto",
        message: `De: ${email}\n Mensaje: ${message}\n Número de contacto: ${phoneNumber || 'No proporcionado'}`
    })

    await sendEmail({
        to: email,
        subject: 'Bienvenido!!',
        message: htmlContent
    })

    res.json({ success: true, message: 'Mensaje enviado y guardado exitosamente.' });
});

module.exports = {
    contact
}
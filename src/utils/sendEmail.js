const nodemailer = require("nodemailer");
const fs = require('fs');



const sendEmail = (options) => new Promise((resolve, reject) => {
    const path = require('path');
    const filePath = path.join(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(filePath, 'utf-8');

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    const mailOptions = {
        from: process.env.EMAIL,
        to: options.to,
        subject: options.subject,
        html: htmlContent,
        ...options
    }
    transporter.sendMail(mailOptions, (error, info) => {
        console.log(error, info)
        if (error) {
            console.log(error);
            return reject({ message: "An error has occured" })
        }
        return resolve({ message: "Email sent successfully" })
    })

})

module.exports = sendEmail;
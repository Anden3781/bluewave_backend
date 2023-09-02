const sendEmail = require('../utils/sendEmail');

module.exports = {
    async sendMessage({to, subject, message}) {
        await sendEmail({
            to,
            subject: "Bienvenido",
            message
        });

        try {
            await EmailCode.create({
                email: to
            });
        } catch (error) {
            console.error("Error al guardar el correo en la base de datos:", error);
        }
    }
}
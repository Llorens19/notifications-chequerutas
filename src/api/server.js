require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const nodemailer = require('nodemailer');

// Configuración del transportador de Nodemailer
const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Ruta para enviar correos electrónicos
fastify.post('/send-email', async (request, reply) => {
    const { to, subject, text } = request.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        reply.send({ success: true, messageId: info.messageId });
    } catch (error) {
        reply.status(500).send({ success: false, error: error.message });
    }
});

// Iniciar el servidor
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        fastify.log.info(`Servidor escuchando en http://localhost:3000`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();

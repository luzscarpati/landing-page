import { createTransport } from "nodemailer";
import config from '../config/config.js';

const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: false,
    auth: {
        user: config.EMAIL,
        pass: config.PASSWORD
    },
    debug: true
});

const messageToCpmpany = (firstName, lastName, email) => {
    return (
        `<h3>${firstName} ${lastName}, quiere adquirir un servicio. Escribile a ${email}</h3>`
    )
};

const messageToUser = (firstName) => {
    return (
        `<h3>¡Hola${firstName}! Gracias por escribirnos. En breve nos comunicaremos con vos.</h3>`
    )
};

export const sendMailservice = async (firstName, lastName, email) => {
    try {
        const messageCompany = messageToCpmpany(firstName, lastName, email)
        const messageUser = messageToUser(firstName, email)
        const companyMailOptions = {
            from: config.EMAIL,
            to: 'gamerapodcast@gmail.com',
            subject: `${firstName} se contactó`,
            html: messageCompany
        };

        const userMailOptions = {
            from: config.EMAIL,
            to: email, 
            subject: 'Gracias por contactarte',
            html: messageUser
        };

        const [companyResponse, userResponse] = await Promise.all([
            transporter.sendMail(companyMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        if (companyResponse && companyResponse.accepted && companyResponse.accepted.length > 0 && userResponse && userResponse.accepted && userResponse.accepted.length > 0) {
            console.log("Correos electrónicos enviados exitosamente.");
            return true;
        } else {
            console.error("Error al enviar uno o ambos correos electrónicos.");
            return false;
        }
    } catch (error) {
        console.error("Error al enviar el correo electrónico:", error);
        return false;
    }
};
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

const emailContact = (firstName, lastName, email) => {
    console.log("FirstName  --  SERVICES EMAILCONTACT----", firstName);
        console.log("lastName  --  SERVICES EMAILCONTACT----", lastName);
        console.log("email  --  SERVICES EMAILCONTACT----", email)
    return (
        `<h3>${firstName} ${lastName}, quiere adquirir un servicio. Escribile a ${email}</h3>`
    )
};

export const sendMailservice = async (firstName, lastName, email) => {
    try {
        console.log("FirstName  --  SERVOCES SEMD,AILSERVICE----", firstName);
        console.log("lastName  --  SERVOCES SEMD,AILSERVICE----", lastName);
        console.log("email  --  SERVOCES SEMD,AILSERVICE----", email)
        const message = emailContact(firstName, lastName, email)
        const gmailOptions = {
            from: config.EMAIL,
            to: 'gamerapodcast@gmail.com',
            subject: `${firstName} se contactó`,
            html: message
        };

        const response = await transporter.sendMail(gmailOptions);

        if (response && response.accepted && response.accepted.length > 0) {
            console.log("Correo electrónico enviado exitosamente:", response);
            return true;
        } else {
            console.error("Error al enviar el correo electrónico:", response);
            return false;
        }
    } catch (error) {
        console.error("Error al enviar el correo electrónico:", error);
        return false;
    }
};
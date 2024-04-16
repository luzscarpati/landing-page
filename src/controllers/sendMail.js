import { sendMailservice } from '../services/sendMailservices.js';

export const sendMail = async (req, res) => {
    try{
        const { firstName, lastName, email } = req.body;
        console.log("FirstName  --  CONTROLLER----", firstName);
        console.log("lastName  --  CONTROLLER----", lastName);
        console.log("email  --  CONTROLLER----", email)

        const exito = await sendMailservice(firstName, lastName, email);
        if (exito) {
          res.send('Formulario enviado correctamente');
        } else {
          res.status(500).send('Error al enviar el formulario');
        }    
    }catch(error){
        console.log(error);
    };  
};
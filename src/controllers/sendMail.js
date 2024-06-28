import { sendMailservice } from '../services/sendMailservices.js';
import swal from 'sweetalert';

export const sendMail = async (req, res) => {
    try{
        const { firstName, lastName, email } = req.body;
        const exito = await sendMailservice(firstName, lastName, email);
        if (exito) {
          swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          })
          //res.send('Formulario enviado correctamente');
        } else {
          res.status(500).send('Error al enviar el formulario');
        }    
    }catch(error){
        console.log(error);
    };  
};
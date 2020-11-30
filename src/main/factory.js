import {SaveUserController} from '../controllers/saveUserController';
import {SendEmailNodemailer} from '../services/SendEmailNodemailer';

class SaveUserUseCase {
  constructor(){}
}

const data = {
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  user: process.env.NODEMAILER_USER,
  pass: process.env.NODEMAILER_PASS
}



const sendEMail = new SendEmailNodemailer(data);
const saveUserUseCase = new SaveUserUseCase();
const saveUserController = new SaveUserController(saveUserUseCase, sendEMail);


export default saveUserController;

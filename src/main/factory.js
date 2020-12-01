import {SaveUserController} from '../controllers/saveUserController';
import {SendEmailQueue} from '../services/SendEmailQueue';

class SaveUserUseCase {
  constructor(){}
}

const data = {
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  user: process.env.NODEMAILER_USER,
  pass: process.env.NODEMAILER_PASS
}


const sendEmailQueue = new SendEmailQueue()
const saveUserUseCase = new SaveUserUseCase();
const saveUserController = new SaveUserController(saveUserUseCase, sendEmailQueue);


export default saveUserController;

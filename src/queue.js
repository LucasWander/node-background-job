import 'dotenv/config';
const Queue = require("bull");
import {SendEmailNodemailer} from './services/SendEmailNodemailer';

class ConfirmationEmailQueue {

  constructor(sendEmail) {
    this.sendEmailQueue = new Queue('confirmation email', {redis:{port:6379, host:'127.0.0.1'}});

    this.sendEmail = sendEmail;

    this.setup();
  }

  addProcessMethod() {
    this.sendEmailQueue.process('RegistrationMail' ,async (job, done) => {

      try {
        await this.sendEmail.send({name: job.data.name, email:job.data.email});
      }
      catch(e) {
        console.log(e);
      }

      done();
    });
  }

  addCompletedListener() {
    this.sendEmailQueue.on("completed",
     (job, err) => {

      console.log('Completo');
    });
  }

  setup() {
    this.addProcessMethod();
    this.addCompletedListener();
  }
}

const data = {
  host: process.env.NODEMAILER_HOST,
  port: process.env.NODEMAILER_PORT,
  user: process.env.NODEMAILER_USER,
  pass: process.env.NODEMAILER_PASS
}

const sendEmailNodemailer = new SendEmailNodemailer(data);
const confirmationEmailQueue =  new ConfirmationEmailQueue(sendEmailNodemailer);





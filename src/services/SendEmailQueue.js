const Queue = require("bull");

export class SendEmailQueue {

  constructor(data){

    this.sendEmailQueue = new Queue('confirmation email', {redis:{port:6379, host:'127.0.0.1'}});
  }

  async send(data){

    await this.sendEmailQueue.add('RegistrationMail',{name: data.name, email:data.email}, {priority:3, delay:5000});
  }
}

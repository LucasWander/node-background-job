export class RegistrationMail {

  constructor(sendEmail, options = {
    delay: 5000,
    priority: 3
  }){
    this.key='RegistrationMail';
    this.options = options;
    this.sendEmail = sendEMail;
  }


  async handle({data}) {

    this.sendEmail.send({name: data.user.name,email:data.user.email});
  }
}

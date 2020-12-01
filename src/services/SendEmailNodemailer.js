import nodemailer from 'nodemailer';

export class SendEmailNodemailer {
  constructor(data){
    this.transporter = nodemailer.createTransport({
      host: data.host,
      port: data.port,
      auth: {
        user: data.user,
        pass: data.pass
      }
    });
  }

  async send(data){


    const info = await this.transporter.sendMail({
      from: 'DIO <contato@dio.com.br>', // sender address
      to: `${data.name} <${data.email}>`, // list of receivers
      subject: "Cadastro de usuário", // Subject line
      html: `<b style="color:red">Olá, ${data.name} bem-vindo a DIO</b>`, // html body
    });

  }
}

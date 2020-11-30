import passwordGenerator from 'password-generator';


export class SaveUserController {

  constructor(saveUser, sendEmail) {
    this.saveUser = saveUser;
    this.sendEmail = sendEmail;
  }

  async handle(req) {


    try {
      const { name, email } = req;

      const user = {
        name, email, password: passwordGenerator(15, false)
      }

      await this.sendEmail.send({name, email});

      return {
        status: 201,
        body: {
          user
        }
      };
    } catch (e) {
      throw e;
    }


  }
}

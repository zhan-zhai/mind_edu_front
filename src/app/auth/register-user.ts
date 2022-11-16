export class RegisterUser {
  id: string;
  user_name: string;
  user_pwd: string;
  email: string;
  identity: string;
  code: string;

  constructor() {
    this.id = '';
    this.user_name = '';
    this.user_pwd = '';
    this.email = '';
    this.identity = 'teacher';
    this.code = '';
  }
}

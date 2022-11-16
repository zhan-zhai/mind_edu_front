export class StuShort {
  title: string;
  answer: string;

  submitted: boolean;
  confirmed: boolean;

  constructor() {
    this.title = '';
    this.answer = '';

    this.submitted = false;
    this.confirmed = false;
  }
}

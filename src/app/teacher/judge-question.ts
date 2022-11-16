export class JudgeQuestion {
  title: string;
  correct_answer: string;
  assignmentLongId: number;
  correct_number: string;
  number: string;

  value: number;

  constructor() {
    this.title = '';
    this.correct_answer = '';
    this.correct_number = '';
    this.number = '';
    this.assignmentLongId = 0;
    this.value = 1;
  }
}

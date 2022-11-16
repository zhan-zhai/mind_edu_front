export class FinishedJudge {
    title: string;
    answer: string;
    correct_answer: string;
    assignmentLongId: number;
    number: string;
    submit_time: Date;

    constructor() {
        this.title = '';
        this.correct_answer = '';
        this.number = '';
        this.assignmentLongId = 0;
        this.answer = '';
        this.submit_time = new Date();
    }
}
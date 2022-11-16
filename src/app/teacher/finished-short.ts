export class FinishedShort {
    title: string;
    correct_answer: string;
    assignmentLongId: number;
    answer: string;
    submit_time: Date;
    constructor() {
        this.title = '';
        this.correct_answer = '';
        this.assignmentLongId = 0;
        this.answer = '';
        this.submit_time = new Date();
    }
}

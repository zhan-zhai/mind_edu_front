export class FinishedMultiple {
    assignmentLongId: number;
    title: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correct_answer: string;
    answer: string;
    submit_time: Date;

    constructor() {
        this.title = '';
        this.optionA = '';
        this.optionB = '';
        this.optionC = '';
        this.optionD = '';
        this.correct_answer = '';
        this.answer = '';
        this.assignmentLongId = 0;
        this.submit_time = new Date();
    }
}

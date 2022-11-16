export class ModifyUser {
    user_name: string;
    old_name: string;
    user_pwd: string;
    identity: string;

    constructor() {
        this.user_name = '';
        this.old_name = '';
        this.user_pwd = '';
        this.identity = 'teacher';
    }
}

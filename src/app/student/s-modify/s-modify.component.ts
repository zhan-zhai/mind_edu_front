import { Component, OnInit } from '@angular/core';

import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import {UserService} from '../../auth/user.service';
import {ModifyUser} from '../../auth/modify-user';

@Component({
    selector: 'app-s-modify',
    templateUrl: './s-modify.component.html',
    styleUrls: ['./s-modify.component.css']
})
export class SModifyComponent implements OnInit {
    user: ModifyUser = new ModifyUser();
    constructor(
        private modal: NzModalRef,
        private userService: UserService,
        private modalService: NzModalService
    ) { }

    ngOnInit() {
        this.user.identity = window.sessionStorage.getItem('identity');
        this.user.old_name = window.sessionStorage.getItem('user_name');
    }

    onSubmit(): void {
        // 检查输入
        if (!this.checkInputStatus()) {
            const inModal = this.modalService.info(
                {
                    nzTitle: '请先填写登录信息',
                    nzContent: '用户名或密码为空'
                });

            window.setTimeout(() => inModal.destroy(), 2000);

            return;
        }


        // 发送信息
        this.userService.modify(this.user).subscribe(value => {
            if (value['success']) {
                this.storeUserInfo(); // 存储用户信息

                const inModal = this.modalService.success(
                    {
                        nzTitle: '修改成功',
                        nzContent: '两秒钟后会自动跳转'
                    });

                window.setTimeout(() => {
                    inModal.destroy();
                    this.destroyModal();

                    // if (this.user.identity === 'teacher') {
                    //     this.router.navigate(['t']);
                    // } else if (this.user.identity === 'student') {
                    //     this.router.navigate(['s']);
                    // }
                }, 2000);
            } else {
                const inModal = this.modalService.error(
                    {
                        nzTitle: '修改失败'
                    });
                window.setTimeout(() => inModal.destroy(), 2000);
            }
        });
    }

    checkInputStatus() {
        return this.user.user_name !== '' && this.user.user_pwd !== '';
    }

    storeUserInfo(): string {
        window.sessionStorage.setItem('user_name', this.user.user_name);
        window.sessionStorage.setItem('user_pwd', this.user.user_pwd);

        return this.user.identity;
    }

    destroyModal(): void {
        this.modal.destroy({ data: 'this the result data' });
    }

}

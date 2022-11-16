import {ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {SModifyComponent} from '../s-modify/s-modify.component';
import {ModifyComponent} from '../../auth/modify/modify.component';

@Component({
  selector: 'app-s-main',
  templateUrl: './s-main.component.html',
  styleUrls: ['./s-main.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SMainComponent implements OnInit {

  username = '';

  constructor(
      private modalService: NzModalService,
      private  changeDetectorRef: ChangeDetectorRef,
      private router: Router) { }

  ngOnInit() {
    this.username = window.sessionStorage.getItem('user_name');
  }

  logOut() {
    window.sessionStorage.clear();
    this.router.navigate(['main']);
  }

  modify() {
      const modal = this.modalService.create({
          nzTitle: '修改信息',
          nzContent: ModifyComponent,
          nzFooter: [
              {
                  label: '提交',
                  type: 'primary',
                  onClick: (componentInstance) => componentInstance.onSubmit()
              },
              {
                  label: '取消',
                  onClick: () => {
                      modal.destroy();
                  }
              }
          ],
          nzMaskClosable: false
      });

      modal.afterClose.subscribe((result: Boolean) => {
          // console.log('simpleModal-afterClose-res: ', result);
          if (result) {
              this.username = window.sessionStorage.getItem('user_name');
              this.changeDetectorRef.markForCheck();
              this.changeDetectorRef.detectChanges();
          }
      });
  }
}

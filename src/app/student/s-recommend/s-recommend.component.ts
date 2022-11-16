import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit} from '@angular/core';
import {StuShort} from '../stu-short';
import {StuMultiple} from '../stu-multiple';
import {StuJudge} from '../stu-judge';
import {SNodeService} from '../s-node.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-s-recommend',
  templateUrl: './s-recommend.component.html',
  styleUrls: ['./s-recommend.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SRecommendComponent implements OnInit, OnChanges  {

    stuMultiples: StuMultiple[];

    @Input() course_id: string; // 与上层组件中course绑定
    @Input() mind_id: string; // 与上层组件中选中的mindMap绑定
    @Input() node_id: string;

    constructor(
        private nodeService: SNodeService,
        private  changeDetectorRef: ChangeDetectorRef,
        private modalService: NzModalService
    ) { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.updateHomework();
    }

    updateHomework() {
        // 获取所有的选择题
        this.nodeService.getRecommendMulti(
            this.course_id,
            this.mind_id,
            'root',
            window.sessionStorage.getItem('user_name')).subscribe(
            value => this.setMultiple(value));
    }

    setMultiple(value) {
        this.stuMultiples = value;
        for (const stuMultiple of this.stuMultiples) {
            if (stuMultiple.answer !== '') {

                stuMultiple.submitted = true;
                stuMultiple.confirmed = true;
            }
        }
    }
    // 提交选择题
    submitMultiple(stuMultiple: StuMultiple) {
        this.nodeService.answerMultiple(
            this.course_id,
            this.mind_id,
            this.node_id,
            window.sessionStorage.getItem('user_name'),
            stuMultiple).subscribe(
            value => {
                this.checkSubmit(value['success']);
                stuMultiple.submitted = true;
                this.changeDetectorRef.markForCheck();
                this.changeDetectorRef.detectChanges();
            });
    }
    // 检查提交
    checkSubmit(value) {
        if (value) {
            const inModal = this.modalService.success(
                {
                    nzTitle: '提交成功',
                    nzContent: '已保存答案'
                });
            window.setTimeout(() => {
                inModal.destroy();
            }, 2000);
        } else {
            const inModal = this.modalService.error(
                {
                    nzTitle: '提交失败',
                    nzContent: '未知错误'
                });
            window.setTimeout(() => {
                inModal.destroy();
            }, 2000);
        }
    }

    // 查看正确答案
    checkAnswer(id: string, type: number) {
        this.nodeService.get_real_answer(
            id,
            type,
            window.sessionStorage.getItem('user_name')
        ).subscribe(
            // todo 显示答案
            r => {
                this.modalService.info(
                    {
                        nzTitle: '参考答案为：',
                        nzContent: type === 3 ? (r['answer'] === 'T' ? '正确' : '错误') : r['answer']
                    }
                );
            }
        );
    }
}

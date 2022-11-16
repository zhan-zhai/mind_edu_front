import {Component, Input, OnChanges, OnInit, TemplateRef} from '@angular/core';

import {TNodeService} from '../t-node.service';
import {MultipleQuestion} from '../multiple-question';
import {ShortQuestion} from '../short-question';
import {NzModalRef, NzModalService} from 'ng-zorro-antd';
import {JudgeQuestion} from '../judge-question';

@Component({
  selector: 'app-t-homework',
  templateUrl: './t-homework.component.html',
  styleUrls: ['./t-homework.component.css']
})
export class THomeworkComponent implements OnInit, OnChanges {


  multipleQuestions: MultipleQuestion[]; // 选择题列表
  shortQuestions: any[]; // 简答题列表
  judgeQuestions: JudgeQuestion[];

  // 添加选择题与简答题用
  multiple: MultipleQuestion = new MultipleQuestion();
  short: ShortQuestion = new ShortQuestion();
  judge: JudgeQuestion = new JudgeQuestion();

  @Input() course_id: string; // 与上层组件中course绑定
  @Input() mind_id: string; // 与上层组件中选中的mindMap绑定
  @Input() node_id: string;

  tplModal: NzModalRef; // 用于发布新的题目

  constructor(
    private nodeService: TNodeService,
    private modalService: NzModalService
  ) { }

  ngOnInit() {
    this.updateHomework();
  }

  ngOnChanges() {
    this.updateHomework();
  }


  updateHomework() {
    // 获取所有的选择题
    this.nodeService.getMultiple(
      this.course_id,
      this.mind_id,
      this.node_id).subscribe(
      value => {
        console.log(value);
        this.setMultiple(value);
      }
    );

    // 获取所有的简答题
    this.nodeService.getShort(
      this.course_id,
      this.mind_id,
      this.node_id).subscribe(
      value => this.setShort(value));

    this.nodeService.getJudge(
      this.course_id,
      this.mind_id,
      this.node_id).subscribe(
      value => this.setJudge(value));
  }
  deleteQuestion() {
    console.log('删除');
  }
  setMultiple(value) {
    this.multipleQuestions = value;
  }

  setShort(value) {
    this.shortQuestions = value;
  }

  setJudge(value) {
    this.judgeQuestions = value;
  }

  openReleaseModal(
    tplTitle: TemplateRef<{}>,
    tplContent: TemplateRef<{}>,
    tplFooter: TemplateRef<{}>
  ) {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false
    });
  }

  releaseMultiple () {
    this.multiple.title = this.getFormatCode(this.multiple.title);
    // 发布选择题
    this.nodeService.releaseMutiple(
      this.course_id,
      this.mind_id,
      this.node_id,
      this.multiple)
      .subscribe(
        (value) => {
          this.checkMultiple(value['success']);
        }
      );
  }

  releaseShort() {
    this.short.title = this.getFormatCode(this.short.title);
    this.short.correct_answer = this.getFormatCode(this.short.correct_answer);
    // 发布简答题
    this.nodeService.releaseShort(
      this.course_id,
      this.mind_id,
      this.node_id,
      this.short)
      .subscribe((value => this.checkShort(value['success'])));
  }

  releaseJudge() {
    this.judge.title = this.getFormatCode(this.judge.title);
    // 发布简答题
    this.nodeService.releaseJudge(
      this.course_id,
      this.mind_id,
      this.node_id,
      this.judge)
      .subscribe((value => this.checkJudge(value['success'])));
  }

  checkMultiple(value) {
    if (value) {
      // 如果发布成功则重新加载作业（以获取最新添加的作业）
      this.alertSuccess('发布成功', '选择题列表已更新');

      this.updateHomework();
      // 如果发布成功则新建一个选择题（清除缓存）
      this.multiple = new MultipleQuestion();
    }
  }

  checkShort(value) {
    if (value) {
      this.alertSuccess('发布成功', '简答题列表已更新');

      this.updateHomework();
      this.short = new ShortQuestion();
    }
  }

  checkJudge(value) {
    if (value) {
      // 如果发布成功则重新加载作业（以获取最新添加的作业）
      this.alertSuccess('发布成功', '判断题列表已更新');

      this.updateHomework();
      // 如果发布成功则新建一个选择题（清除缓存）
      this.judge = new MultipleQuestion();
    }
  }

  alertSuccess(title: string, content: string) {
    const inModal = this.modalService.success(
      {
        nzTitle: title,
        nzContent: content
      });
    window.setTimeout(() => {
      inModal.destroy();
      this.tplModal.destroy();
    }, 2000);
  }

  alertFail(title: string, content: string) {
    const inModal = this.modalService.error(
      {
        nzTitle: title,
        nzContent: content
      });
    window.setTimeout(() => {
      inModal.destroy();
      this.tplModal.destroy();
    }, 2000);
  }

  /*
 * 根据Value格式化为带有换行、空格格式的HTML代码
 * @param strValue {String} 需要转换的值
 * @return  {String}转换后的HTML代码
 * @example
 * getFormatCode("测\r\n\s试")  =>  “测<br/> 试”
 */
  getFormatCode(strValue) {
    return strValue.replace(/\r\n/g, '<br/>')
      .replace(/\n/g, '<br/>')
      .replace(/\s/g, '&nbsp;');
  }
  // deleteShort(id: number) {
  //   this.nodeService.removeShort(id).subscribe(
  //     value => this.checkDeleteShort(value['success'])
  //   );
  // }
  // deleteJudge(id: number) {
  //   this.nodeService.removeJudge(id).subscribe(
  //     value => this.checkDeleteShort(value['success'])
  //   );
  // }
  // deleteMultiple(id: number) {
  //   this.nodeService.removeMultiple(id).subscribe(
  //     value => this.checkDeleteShort(value['success'])
  //   );
  // }
  //
  // checkDeleteShort(value) {
  //   if (value) {
  //     this.alertSuccess('删除成功', '题目列表已更新');
  //
  //     this.updateHomework();
  //   } else {
  //     this.alertFail('删除失败', '此题目已有人作答或其他原因');
  //   }
  // }

}

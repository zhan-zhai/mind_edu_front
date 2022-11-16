import {ChangeDetectorRef, ChangeDetectionStrategy, Component, DoCheck, Input, OnInit} from '@angular/core';
import {FinishedMultiple} from '../finished-multiple';
import {FinishedShort} from '../finished-short';
import {FinishedJudge} from '../finished-judge';
import {TNodeService} from '../t-node.service';
import {NzModalService} from 'ng-zorro-antd';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-t-student-finished',
  templateUrl: './t-student-finished.component.html',
  styleUrls: ['./t-student-finished.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DatePipe]
})
export class TStudentFinishedComponent implements OnInit, DoCheck   {

  finishedMultiples: FinishedMultiple[];
  finishedShorts: FinishedShort[];
  finishedJudges: FinishedJudge[];

  finishedMultiple: FinishedMultiple = new FinishedMultiple();
  finishedShort: FinishedShort = new FinishedShort();
  finishedJudge: FinishedJudge = new FinishedJudge();

    @Input() course_id: string; // 与上层组件中course绑定
    @Input() mind_id: string; // 与上层组件中选中的mindMap绑定
    @Input() node_id: string;
    @Input() student_name: string;
    old_name: string;

  constructor(
      private nodeService: TNodeService,
      private datePipe: DatePipe,
      private  changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getAllFinished();
    this.old_name = this.student_name;
  }

  getAllFinished() {
    this.nodeService.getFinishedMultiples(
        this.course_id,
        this.mind_id,
        this.node_id,
        this.student_name
    ).subscribe(
        value => {
          this.finishedMultiples = value;
        }
    );

    this.nodeService.getFinishedJudges(
        this.course_id,
        this.mind_id,
        this.node_id,
        this.student_name
    ).subscribe(value => {
      this.finishedJudges = value;
    });

    this.nodeService.getFinishedShorts(this.course_id,
        this.mind_id,
        this.node_id,
        this.student_name).subscribe(value => {
          this.finishedShorts = value;
    });
  }

    ngDoCheck(): void {
      if (this.student_name !== this.old_name) {
        this.getAllFinished();
        this.old_name = this.student_name;
      }
        this.changeDetectorRef.markForCheck();
        this.changeDetectorRef.detectChanges();
    }

}

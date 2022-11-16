import {Component, Input, OnInit} from '@angular/core';
import {Feedback} from '../feedback';

@Component({
  selector: 'app-t-feedback',
  templateUrl: './t-feedback.component.html',
  styleUrls: ['./t-feedback.component.css']
})
export class TFeedbackComponent implements OnInit {
  feedback_list: Feedback[] = [
    {question_title: '111111111111111111111111111', info: '111111'},
    {question_title: '222222222222222222222222222', info: '222222'},
    {question_title: '333333333333333333333333333', info: '333333'}
  ];

  @Input() course_id: string; // 与上层组件中course绑定
  @Input() mind_id: string; // 与上层组件中选中的mindMap绑定
  @Input() node_id: string; // 当前选中的节点
  constructor() { }

  ngOnInit() {
  }

}

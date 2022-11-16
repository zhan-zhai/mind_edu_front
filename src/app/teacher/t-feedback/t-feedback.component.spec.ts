import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TFeedbackComponent } from './t-feedback.component';

describe('TFeedbackComponent', () => {
  let component: TFeedbackComponent;
  let fixture: ComponentFixture<TFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

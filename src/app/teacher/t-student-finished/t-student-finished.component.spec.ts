import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TStudentFinishedComponent } from './t-student-finished.component';

describe('TStudentFinishedComponent', () => {
  let component: TStudentFinishedComponent;
  let fixture: ComponentFixture<TStudentFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TStudentFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TStudentFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

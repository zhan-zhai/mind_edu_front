import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SRecommendComponent } from './s-recommend.component';

describe('SRecommendComponent', () => {
  let component: SRecommendComponent;
  let fixture: ComponentFixture<SRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

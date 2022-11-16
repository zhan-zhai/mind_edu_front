import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SModifyComponent } from './s-modify.component';

describe('SModifyComponent', () => {
  let component: SModifyComponent;
  let fixture: ComponentFixture<SModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

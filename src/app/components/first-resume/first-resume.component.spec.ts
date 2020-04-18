import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstResumeComponent } from './first-resume.component';

describe('FirstResumeComponent', () => {
  let component: FirstResumeComponent;
  let fixture: ComponentFixture<FirstResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

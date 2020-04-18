import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondResumeComponent } from './second-resume.component';

describe('SecondResumeComponent', () => {
  let component: SecondResumeComponent;
  let fixture: ComponentFixture<SecondResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

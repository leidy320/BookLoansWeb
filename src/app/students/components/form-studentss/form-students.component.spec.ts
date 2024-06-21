import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStudentssComponent } from './form-students.component';

describe('FormStudentssComponent', () => {
  let component: FormStudentssComponent;
  let fixture: ComponentFixture<FormStudentssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormStudentssComponent]
    });
    fixture = TestBed.createComponent(FormStudentssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Inject, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/students.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-form-studentss',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.scss']

})
export class FormStudentssComponent{

  public formulario: FormGroup;
  public isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentsService,
    private dialogRef: MatDialogRef<FormStudentssComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = this.fb.group({
      nameStudent: ['', Validators.required],
      identificationDocument: ['', Validators.required],
      program: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.isEditMode = true;
      this.formulario.patchValue(this.data);
    }
  }

  onSubmit() {
    this.studentService.saveStudents(this.formulario.value).subscribe(
      response => {
        this.dialogRef.close(true);
      },
      error => {
        console.error('Error al crear:', error);
      }
    );
  }

}

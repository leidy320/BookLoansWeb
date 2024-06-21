import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-form-loan',
  templateUrl: './form-loan.component.html',
  styleUrls: ['./form-loan.component.scss']
})
export class FormLoanComponent {
  public formulario: FormGroup;


  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private dialogRef: MatDialogRef<FormLoanComponent>,
    @Inject(MAT_DIALOG_DATA) public idBook: any
  ) {
    this.formulario = this.fb.group({
      bookId: [this.idBook,Validators.required],
      studentDocument: ['', Validators.required],
      timeReturn: ['', Validators.required]
    });
  }

  onSubmit() {
    this.bookService.saveLoanBook(this.formulario.value).subscribe(
      response => {
        this.dialogRef.close(true);
      },
      error => {
        console.error('Error al crear:', error);
      }
    );
  }

}

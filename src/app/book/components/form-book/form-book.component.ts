import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent {
  public formulario: FormGroup;
  public isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private dialogRef: MatDialogRef<FormBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = this.fb.group({
      nameAuthor: ['', Validators.required],
      birthDate: ['', Validators.required],
      placeBirth: ['', Validators.required],
      nameBook: ['', Validators.required],
      publicationDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.data) {
      this.isEditMode = true;
      this.formulario.patchValue(this.data);
    }
  }

  onSubmit() {
    this.bookService.saveBooks(this.formulario.value).subscribe(
      response => {
        this.dialogRef.close(true);
      },
      error => {
        console.error('Error al crear:', error);
      }
    );
  }
}

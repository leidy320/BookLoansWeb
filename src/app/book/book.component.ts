import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Books} from './page-book.model';
import { MatDialog } from '@angular/material/dialog';
import { FormBookComponent } from './components/form-book/form-book.component';
import { FormLoanComponent } from './components/form-loan/form-loan.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})


export class BookComponent {
  public books: Books[]=[];
  displayedColumns: string[] = ['id','nameAuthor','birthDate', 'placeBirth', 'nameBook',
  'publicationDate','actions'];
  public dataSource: Books[]=[];
  clickedRows = new Set<Books>();

  constructor(private bookServices: BookService,
  private dialog: MatDialog) { }

  ngOnInit() {
    this.bookServices.getBooks().subscribe(response => {
      this.books = response;
      this.dataSource= this.books;
    });
  }

  openDialog() {
    const config = {
      height: '400px',
      width: '300px',
    }
    this.dialog.open(FormBookComponent, config);
  }

  deleteBook(book: Books) {
    console.log('Delete student', book);
    this.bookServices.deleteBooks(book.id).subscribe(() => {
      this.books = this.books.filter(s => s.id !== book.id);
      this.dataSource = this.books;
  })
 }

  editBook(book: Books) {
    const config = {
      data: book,
      height: '400px',
      width: '300px',
    }
    this.dialog.open(FormBookComponent, config);
  }


  loanBook(id: number) {
    const config = {
      data: id,
      height: '400px',
      width: '300px',
    }
    this.dialog.open(FormLoanComponent, config);
  }


}


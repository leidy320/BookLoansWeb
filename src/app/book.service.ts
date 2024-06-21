import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpService } from './http.service';
import { Books } from './book/page-book.model';
import { Loan } from './book/page-loan.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpService) { }

  getBooks(): Observable<any> {
    const path = 'http://localhost:8081/book';
    return this.httpService.get(path).pipe(map((response:any )=>response.body))

   }

   saveBooks(books : Books): Observable<any> {
    const path = 'http://localhost:8081/book';
    return this.httpService.post(path, books).pipe(map((response:any )=>response.body))
  }
  deleteBooks(id : number): Observable<any> {
    const path = `${'http://localhost:8081/book/'}${id}`;
    return this.httpService.delete(path).pipe(map((response:any )=>response.body))
  }
  updateBooks(): Observable<any> {
    const path = 'http://localhost:8081/book';
    return this.httpService.put(path).pipe(map((response:any )=>response.body))

  }

  saveLoanBook(loans : Loan): Observable<any> {
    const path = 'http://localhost:8081/book/loan';
    return this.httpService.post(path, loans).pipe(map((response:any )=>response.body))
  }

  }








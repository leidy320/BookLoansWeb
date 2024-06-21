import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  public post(url: string, body?: any): Observable<object> {
    return this.http.post(url, body, { observe: 'response' })
    .pipe(catchError(error => this.handlerError(error)));
  }

  public get(url: string): Observable<object> {
    return this.http.get(url, { observe: 'response' })
    .pipe(catchError(error => this.handlerError(error)));
  }

  public put(url: string, body?: any): Observable<object> {
    return this.http.put(url, body, { observe: 'response' })
    .pipe(catchError(error => this.handlerError(error)));
  }

  public delete(url: string): Observable<object> {
    return this.http.delete(url, { observe: 'response' })
    .pipe(catchError(error => this.handlerError(error)));
  }

  private handlerError(error: HttpErrorResponse) {
    return throwError(() => error)
  }


}

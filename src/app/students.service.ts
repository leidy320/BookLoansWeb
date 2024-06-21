import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpService } from './http.service';
import { Students } from './students/page-student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpService: HttpService) { }

  getStudents(): Observable<any> {
    const path = 'http://localhost:8081/student';
    return this.httpService.get(path).pipe(map((response:any )=>response.body))

  }
  saveStudents(student : Students): Observable<any> {
    const path = 'http://localhost:8081/student';
    return this.httpService.post(path, student).pipe(map((response:any )=>response.body))
  }
  deleteStudents(id : number): Observable<any> {
    const path = `${'http://localhost:8081/student/'}${id}`;
    return this.httpService.delete(path).pipe(map((response:any )=>response.body))
  }
  updateStudents(): Observable<any> {
    const path = 'http://localhost:8081/student';
    return this.httpService.put(path).pipe(map((response:any )=>response.body))

  }





}




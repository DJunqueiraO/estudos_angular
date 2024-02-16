import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../../models/Models';
import 'rxjs/add/operator/catch';
import { Observable, catchError, throwError } from 'rxjs';
import 'rxjs/add/observable/throw';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class EmployeeService {

  private dataUrl: string = "/assets/data/employees.json"

  constructor(private http: HttpClient) {

  }

  getEmployees() {

    return this.http
      .get<IEmployee[]>(this.dataUrl)
      // .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: any) {
    console.log(error)
    return error
  }
}

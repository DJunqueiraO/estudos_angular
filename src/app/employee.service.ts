import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class EmployeeService {

  constructor() {}

  getEmployees() {
    return [
      {
        id: 1,
        name: 'Josicleison',
        age: 24
      },
      {
        id: 2,
        name: 'Joaquina',
        age: 22
      },
      {
        id: 3,
        name: 'Joaquim',
        age: 25
      }
    ]
  }
}

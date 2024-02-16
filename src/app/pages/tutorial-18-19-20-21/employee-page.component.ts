import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent, EmployeeListComponent } from '../../components/Components';
import { IEmployee } from '../../models/IEmployee';
import { HttpClientModule } from '@angular/common/http';

const componentName = 'employee-page';

@Component(
  {
    selector: componentName,
    standalone: true,
    imports: [ 
      CommonModule, 
      EmployeeDetailComponent, 
      EmployeeListComponent,
      HttpClientModule
    ],
    templateUrl: './' + componentName + '.component.html',
    styleUrl: './' + componentName + '.component.css',
    providers: [
      EmployeeService
    ]
  }
)

export class EmployeePageComponent {

  public employees: IEmployee[] = [];
  public errorMsg: string = ''

  constructor(
    private _employeeService: EmployeeService
  ) {
    
  }

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe(
        data => this.employees = data,
        error => this.errorMsg = error
      )
  }
}
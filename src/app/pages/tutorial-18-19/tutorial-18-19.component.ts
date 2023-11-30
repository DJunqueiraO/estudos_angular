import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models/Employee';
import { EmployeeDetailComponent, EmployeeListComponent } from '../../components/Components';

const componentName = 'tutorial-18-19';

@Component(
  {
    selector: componentName,
    standalone: true,
    imports: [ CommonModule, EmployeeDetailComponent, EmployeeListComponent ],
    templateUrl: './' + componentName + '.component.html',
    styleUrl: './' + componentName + '.component.css'
  }
)

export class Tutorial1819Component {

  public employees: Employee[] = [];

  constructor(
    private _employeeService: EmployeeService
  ) {
    this.employees = this._employeeService.getEmployees();
  }
}
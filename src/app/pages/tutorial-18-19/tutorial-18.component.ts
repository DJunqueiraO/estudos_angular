import { Component } from '@angular/core';
import { defaultImports } from '../../utils/Utils';
import { Employee } from '../../models/Employee';
import { EmployeeDetailComponent, EmployeeListComponent } from '../../components/Components';

const componentName = 'tutorial-18'

@Component(
  {
    selector: componentName,
    standalone: true,
    imports: [...defaultImports, EmployeeDetailComponent, EmployeeListComponent],
    templateUrl: './' + componentName + '.component.html',
    styleUrl: './' + componentName + '.component.css'
  }
)

export class Tutorial18Component {

    public employees: Employee[] = [
      {
        id: 1,
        name: 'teste1',
        age: 1
      },
      {
        id: 2,
        name: 'teste2',
        age: 2
      }
    ];
}
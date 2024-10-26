import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/Employee';

const componentName = 'employee-detail';

@Component(
    {
        selector: componentName,
        standalone: true,
        imports: [ CommonModule ],
        templateUrl: './' + componentName + '.component.html',
        styleUrl: './' + componentName + '.component.css'
    }
)

export class EmployeeDetailComponent {

    @Input() public employees: Employee[] = []
}
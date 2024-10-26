import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/Employee';

const componentName = 'employee-list';

@Component(
    {
        selector: componentName,
        standalone: true,
        imports: [ CommonModule ],
        templateUrl: './' + componentName + '.component.html',
        styleUrl: './' + componentName + '.component.css'
    }
)

export class EmployeeListComponent {
    @Input() employees: Employee[] = []
}
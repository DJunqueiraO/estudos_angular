import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-6',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 [style.color]="'orange'">teste</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">teste</h2>
    <h2 [style.color]="highLightColor">teste</h2>
    <h2 style={{titleStyles}}>teste</h2>
    <h2 [ngStyle]="titleStyles">teste</h2>
  `,
  styles: []
})
export class Test6Component {

  public hasError = false
  public highLightColor = 'orange'
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
  }
}

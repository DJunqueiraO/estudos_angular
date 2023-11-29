import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-5',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <h2 class="text-success">Lero Lero</h2>
    <h2 [class]="success">Lero Lero Lero</h2>
    <h2 class="text-special text-success">Lero Lero Lero</h2>
    <h2 [class.text-danger]="hasError">Lero Lero</h2>
    <h2 [ngClass]="messageClasses">Lero Lero</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }

      .text-danger {
        color: red;
      }

      .text-special {
        font-style: italic;
      }
    `
  ]
})
export class Test5Component {

  public name = 'teste'
  public success = 'text-success'
  public hasError = false
  public isSpecial = true

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
}

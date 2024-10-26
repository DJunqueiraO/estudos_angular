import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  // template: '<div>Inline lero lero</div>',
  template: `
    <div>
      Inline lero lero
    </div>
  `,
  styles: [
    `
      div {
        color: red
      }
    `
  ]
})

export class TestComponent {

}

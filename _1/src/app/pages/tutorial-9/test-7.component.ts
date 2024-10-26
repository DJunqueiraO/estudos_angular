import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component(
  {
    selector: 'app-test-7',
    standalone: true,
    imports: [CommonModule],
    template: `
      <h2>Welcome {{name}}</h2>
      <button (click)="greeting='Welcome Josicleison'">Greet</button>
      {{greeting}}
    `,
    styles: []
  }
)
export class Test7Component {

  public name = 'josicleison'
  public greeting = ''
}

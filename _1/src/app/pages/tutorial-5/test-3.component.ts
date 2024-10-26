import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component(
  {
    selector: 'app-test-3',
    standalone: true,
    imports: [CommonModule],
    template: `
      <h2>
        Welcome {{name}}
      </h2>
      <h2>{{2+2}}</h2>
      <h2>{{"Welcome " + name}}</h2>
      <h2>{{name.length}}</h2>
      <h2>{{name.toUpperCase()}}</h2>
      <h2>{{greet()}}</h2>
      <h2>{{windowLocationHref}}</h2>
    `,
    styles: []
  }
)

export class Test3Component {

  public name = 'Lero lero'
  public windowLocationHref = (
    window.location.href
      .split('/')
      .filter($0 => $0.includes('host'))
  )

  constructor() {

  }

  greet(user = this.name) {
    return `Hello ${user}`
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component(
  {
    selector: 'app-test-4',
    standalone: true,
    imports: [CommonModule],
    template: `
      <h2>Welcome {{name}}</h2>
      <input [id]="id" type="text" value="Vishwas"/>
      <input [disabled]="disabled" id={{id}} type="text" value="Vishwas"/>
      <input bind-disabled="disabled" id={{id}} type="text" value="Vishwas"/>
    `,
    styles: []
  }
)

export class Test4Component {

  public name = "lero lero"
  public id = "123"
  public disabled = false
}

import { Component } from '@angular/core';
import { defaultImports } from '../../utils/Utils';

const name = 'tutorial-12-13'

@Component(
  {
    selector: 'app-' + name,
    standalone: true,
    imports: [...defaultImports],
    templateUrl: './' + name + '.component.html',
    styleUrl: './' + name + '.component.css'
  }
)
export class Tutorial1213Component {

  public name = 'josicleison'
  public color = 'red'

  constructor() {}

  getStyle(color = '') {

    const margin = 20

    if(color) {
      return `color: ${this.color}; margin-top: ${margin}px;`
    }

    return {
      marginTop: margin + 'px',
      border: '1px solid black',
      fontWeight: 'bold'
    }
  }
}

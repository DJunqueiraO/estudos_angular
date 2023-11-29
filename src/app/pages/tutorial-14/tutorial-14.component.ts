import { Component } from '@angular/core';
import { defaultImports } from '../../utils/Utils';

const name = 'tutorial-14'

@Component(
  {
    selector: '.app-' + name,
    standalone: true,
    imports: [...defaultImports],
    templateUrl: './' + name + '.component.html',
    styleUrl: './' + name + '.component.css'
  }
)
export class Tutorial14Component {

  public colors: string[] = ['red', 'blue', 'green', 'yellow']
  public firstStyle = 'margin-left: 10px; font-weight: bold'

  getStyle(color: string) {

    const size = 60

    return {
      marginRight: '20px',
      backgroundColor: color,
      height: size + 'px',
      width: size + 'px'
    }
  }
}

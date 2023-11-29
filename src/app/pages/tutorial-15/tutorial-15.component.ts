import { Component, EventEmitter, Input, Output } from '@angular/core';
import { defaultImports } from '../../utils/Utils';

const componentName = 'tutorial-15'

@Component(
  {
    selector: '.' + componentName,
    standalone: true,
    imports: [...defaultImports],
    templateUrl: './' + componentName + '.component.html',
    styleUrl: './' + componentName + '.component.css'
  }
)

export class Tutorial15Component {

  public title = 'World'
  @Output() public childEvent = new EventEmitter()
  @Input('parentData') public name: string | undefined;

  fireEvent() {
    this.childEvent.emit('Hey Codecoca')
  }
}
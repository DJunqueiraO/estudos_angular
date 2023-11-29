import { Component } from '@angular/core';
import { defaultImports } from '../../utils/Utils';

const componentName = 'tutorial-16'

@Component(
  {
    selector: componentName,
    standalone: true,
    imports: [...defaultImports],
    templateUrl: './' + componentName + '.component.html',
    styleUrl: './' + componentName + '.component.css'
  }
)

export class Tutorial16Component {

  public title = "Dados:"
  public message = "testando o titlecase"
  public person = {
    firstName: "josicleison",
    lastName: "elves"
  }
  public date = new Date()
}
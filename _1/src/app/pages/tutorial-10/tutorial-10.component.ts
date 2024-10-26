import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component(
  {
    selector: 'app-tutorial-10',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tutorial-10.component.html',
    styleUrl: './tutorial-10.component.css'
  }
)
export class Tutorial10Component {

  public name = 'josicleison'
  
  logMessage(value: string) {
    console.log(value)
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component(
  {
    selector: 'app-tutorial-11',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './tutorial-11.component.html',
    styleUrl: './tutorial-11.component.css'
  }
)
export class Tutorial11Component {

  public name = 'josicleison'
  public input = ''
  
  logMessage(value: string) {
    console.log(value)
  }
}

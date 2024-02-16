import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  navigationBarStyle = {
    display: 'flex',
    a: {
      marginLeft: '20px'
    }
  }

  routes = routes;
  title = 'crud-angular';
}
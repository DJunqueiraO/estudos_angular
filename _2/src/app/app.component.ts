import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { components } from '../components/components';
import { pages } from '../pages/pages';
import { CommonModule } from '@angular/common';
import { CapitalizedPipe } from '../scripts/scripts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent.imports, RouterOutlet, ...components, ...pages],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  static imports = [CommonModule, CapitalizedPipe, RouterModule]

  title = 'example';
}

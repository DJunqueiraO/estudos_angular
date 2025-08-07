import { Component, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [CommonModule],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {


  protected readonly title = signal('Example');

  routes: Routes = routes;
}

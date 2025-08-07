import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home').then(m => m.Home)
  },
  {
    path: 'contact',
    loadComponent: () => import('./page/contact/contact').then(m => m.Contact)
  },
  {
    path: 'play-mouse',
    loadComponent: () => import('./page/play-mouse/play-mouse').then(m => m.PlayMouse)
  }
];

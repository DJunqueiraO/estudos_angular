import { Routes } from '@angular/router';
import { pages } from '../pages/pages';

export const routes: Routes = (
    [
        ...pages.map($0 => ({ path: $0.name, component: $0})),
        { path: '**', redirectTo: '/home' }
    ]
);

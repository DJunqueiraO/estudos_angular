import { Routes } from '@angular/router';
import { DetailsComponent, HomeComponent } from './app.pages';
import { Tutorial17Component } from './pages/tutorial-17/tutorial-17.component';
import { Tutorial16Component } from './pages/tutorial-16/tutorial-16.component';
import { Tutorial15Component } from './pages/tutorial-15/tutorial-15.component';
import { Tutorial14Component } from './pages/tutorial-14/tutorial-14.component';
import { Tutorial1213Component } from './pages/tutorial-12-13/tutorial-12-13.component';
import { Tutorial11Component } from './pages/tutorial-11/tutorial-11.component';
import { Tutorial10Component } from './pages/tutorial-10/tutorial-10.component';
import { Test6Component } from './pages/tutorial-8/test-6.component';
import { Test5Component } from './pages/tutorial-7/test-5.component';
import { Test4Component } from './pages/tutorial-6/test-4.component';
import { Test3Component } from './pages/tutorial-5/test-3.component';
import { Test2Component } from './pages/tutorial-4/test-2.component';
import { TestComponent } from './pages/test/test.component';
import { Test7Component } from './pages/tutorial-9/test-7.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
    },
    {
        path: 'tutorial3',
        component: TestComponent,
        title: '3'
    },
    {
        path: 'tutorial4',
        component: Test2Component,
        title: '4'
    },
    {
        path: 'tutorial5',
        component: Test3Component,
        title: '5'
    },
    {
        path: 'tutorial6',
        component: Test4Component,
        title: '6'
    },
    {
        path: 'tutorial7',
        component: Test5Component,
        title: '7'
    },
    {
        path: 'tutorial8',
        component: Test6Component,
        title: '8'
    },
    {
        path: 'tutorial9',
        component: Test7Component,
        title: '9'
    },
    {
        path: 'tutorial10',
        component: Tutorial10Component,
        title: '10'
    },
    {
        path: 'tutorial11',
        component: Tutorial11Component,
        title: '11'
    },
    {
        path: 'tutorial1213',
        component: Tutorial1213Component,
        title: '1213'
    },
    {
        path: 'tutorial14',
        component: Tutorial14Component,
        title: '14'
    },
    {
        path: 'tutorial15',
        component: Tutorial15Component,
        title: '15'
    },
    {
        path: 'tutorial16',
        component: Tutorial16Component,
        title: '16'
    },
    {
        path: 'tutorial17',
        component: Tutorial17Component,
        title: '17'
    }
];

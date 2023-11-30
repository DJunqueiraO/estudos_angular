import { Routes } from '@angular/router';
import { DetailsComponent, HomeComponent, Test2Component, Test3Component, Test4Component, Test5Component, Test6Component, Test7Component, TestComponent, Tutorial10Component, Tutorial11Component, Tutorial1213Component, Tutorial14Component, Tutorial15Component, Tutorial16Component, Tutorial17Component } from './pages/Pages';

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

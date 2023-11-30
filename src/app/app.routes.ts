import { Routes } from '@angular/router';
import { 
    DetailsComponent, 
    HomeComponent, 
    Test2Component, 
    Test3Component, 
    Test4Component, 
    Test5Component, 
    Test6Component, 
    Test7Component, 
    TestComponent, 
    Tutorial10Component, 
    Tutorial11Component, 
    Tutorial1213Component, 
    Tutorial14Component, 
    Tutorial15Component, 
    Tutorial16Component, 
    Tutorial17Component 
} from './pages/Pages';
import { Type } from '@angular/core';

const createRoute = (
    path: string, 
    component: Type<any>, 
    title: string = ''
) => (
    {
        path: path,
        component: component,
        title: title || path
    }
)

export const routes: Routes = [
    createRoute('', HomeComponent, 'Home page'),
    createRoute('details/:id', DetailsComponent, 'Home details'),
    createRoute('3', TestComponent),
    createRoute('4', Test2Component),
    createRoute('5', Test3Component),
    createRoute('6', Test4Component),
    createRoute('7', Test5Component),
    createRoute('8', Test6Component),
    createRoute('9', Test7Component),
    createRoute('10', Tutorial10Component),
    createRoute('11', Tutorial11Component),
    createRoute('12_13', Tutorial1213Component),
    createRoute('14', Tutorial14Component),
    createRoute('15', Tutorial15Component),
    createRoute('16', Tutorial16Component),
    createRoute('17', Tutorial17Component)
];

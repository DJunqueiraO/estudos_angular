import { Component } from "@angular/core";

@Component({
    selector: `app-${BindingPageComponent.name}`,
    templateUrl: `./${BindingPageComponent.name}.${BindingPageComponent.sufix}.html`,
    styleUrls: [`./${BindingPageComponent.name}.${BindingPageComponent.sufix}.css`],
    standalone: true
})
export class BindingPageComponent {

    static name = 'binding';
    static sufix = 'page.component';

    image = {
        url: 'https://angular.io/assets/images/logos/angular/angular.svg',
        width: 100
    }
    success = '';
}
import { Component } from "@angular/core";
import { AppComponent } from "../../app/app.component";

@Component({
    selector: `app-${HomePageComponent.name}`,
    imports: AppComponent.imports,
    templateUrl: `./${HomePageComponent.name}.${HomePageComponent.sufix}.html`,
    styleUrls: [`./${HomePageComponent.name}.${HomePageComponent.sufix}.css`],
    standalone: true
})
export class HomePageComponent {

    static name = 'home';
    static sufix = 'page.component';
}
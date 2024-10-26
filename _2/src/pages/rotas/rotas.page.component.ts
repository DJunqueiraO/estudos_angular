import { Component } from "@angular/core";
import { AppComponent } from "../../app/app.component";

@Component({
    selector: `app-${RotasPageComponent.name}`,
    imports: AppComponent.imports,
    templateUrl: `./${RotasPageComponent.name}.${RotasPageComponent.sufix}.html`,
    styleUrls: [`./${RotasPageComponent.name}.${RotasPageComponent.sufix}.css`],
    standalone: true
})
export class RotasPageComponent {

    static name = 'rotas';
    static sufix = 'page.component';
}
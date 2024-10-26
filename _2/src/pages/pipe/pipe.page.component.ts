import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AppComponent } from "../../app/app.component";

@Component({
    selector: `app-${PipePageComponent.name}`,
    imports: AppComponent.imports,
    templateUrl: `./${PipePageComponent.name}.${PipePageComponent.sufix}.html`,
    styleUrls: [`./${PipePageComponent.name}.${PipePageComponent.sufix}.css`],
    standalone: true
})
export class PipePageComponent {

    static name = 'pipe';
    static sufix = 'page.component';

    name = 'josiCLeiSOn eLves'
    date = new Date()
    currency = 12
}
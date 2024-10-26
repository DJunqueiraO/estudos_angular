import { Component } from "@angular/core";

const name = 'header';
const sufix = 'component';


@Component({
    selector: `app-${name}`,
    templateUrl: `./${name}.${sufix}.html`,
    styleUrls: [`./${name}.${sufix}.css`],
    standalone: true
})
export class HeaderComponent {

}
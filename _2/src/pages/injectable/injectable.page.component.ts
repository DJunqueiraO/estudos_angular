import { Component } from "@angular/core";
import { ClientService } from "../../services/client/client.service";
import { AppComponent } from "../../app/app.component";

@Component({
    selector: `app-${InjectablePageComponent.name}`,
    imports: AppComponent.imports,
    templateUrl: `./${InjectablePageComponent.name}.${InjectablePageComponent.sufix}.html`,
    styleUrls: [`./${InjectablePageComponent.name}.${InjectablePageComponent.sufix}.css`],
    standalone: true
})
export class InjectablePageComponent {

    static name = 'injectable';
    static sufix = 'page.component';

    constructor(private client_service: ClientService) {
  
    }
  
    sayHello() {
        alert(this.client_service.sayHello());
    }
}
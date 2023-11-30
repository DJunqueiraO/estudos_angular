import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { EmployeeService } from './employee.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    EmployeeService
  ]
};

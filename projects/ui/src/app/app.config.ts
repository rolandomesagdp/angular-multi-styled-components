import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CONFIGURATOR_APPEARANCE } from 'reusable-components';

export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(routes),
      { provide: CONFIGURATOR_APPEARANCE, useValue: "squared" }
   ]
};

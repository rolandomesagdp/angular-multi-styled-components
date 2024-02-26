import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { routes } from './app.routes';
import { CONFIGURATOR_APPEARANCE } from 'reusable-components';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
   providers: [
      provideAnimations(),
      provideRouter(routes),
      { provide: CONFIGURATOR_APPEARANCE, useValue: "rounded" },
      {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
   ]
};

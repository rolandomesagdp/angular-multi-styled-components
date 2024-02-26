import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { routes } from './app.routes';
import { APPLICATION_APPEARANCE } from 'reusable-components';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
   providers: [
      provideAnimations(),
      provideRouter(routes),
      { provide: APPLICATION_APPEARANCE, useValue: "rounded" },
      {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' }}
   ]
};

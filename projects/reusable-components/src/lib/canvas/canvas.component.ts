import { Component, Inject, Optional } from '@angular/core';
import { APPLICATION_APPEARANCE, ApplicationAppearance } from '../appearance/appearance.token';

@Component({
   selector: 'lib-canvas',
   standalone: true,
   imports: [],
   templateUrl: './canvas.component.html',
   styleUrls: ['./canvas.component.scss', './rounded-canvas.component.scss', './squared-canvas.component.scss'],
   // providers: [{ provide: CONFIGURATOR_APPEARANCE, useValue: "squared"}]
})
export class CanvasComponent {

   constructor(@Inject(APPLICATION_APPEARANCE) public appearance: ApplicationAppearance) {
   }
}

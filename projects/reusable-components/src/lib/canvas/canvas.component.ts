import { Component, Inject } from '@angular/core';
import { CONFIGURATOR_APPEARANCE, ConfiguratorAppearance } from '../appearance/appearance.injectiontoken';

@Component({
   selector: 'lib-canvas',
   standalone: true,
   imports: [],
   templateUrl: './canvas.component.html',
   styleUrls: ['./canvas.component.scss', './rounded-canvas.component.scss', './squared-canvas.component.scss']
})
export class CanvasComponent {

   constructor(@Inject(CONFIGURATOR_APPEARANCE) public appearance: ConfiguratorAppearance) { }
}

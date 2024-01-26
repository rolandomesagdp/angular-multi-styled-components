import { Component, Inject, Input } from '@angular/core';
import { CONFIGURATOR_APPEARANCE, ConfiguratorAppearance } from '../appearance/appearance.injectiontoken';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'lib-canvas-container',
  standalone: true,
  imports: [ CanvasComponent ],
  templateUrl: './canvas-container.component.html',
  styleUrl: './canvas-container.component.css'
})
export class CanvasContainerComponent {
   
   constructor(@Inject(CONFIGURATOR_APPEARANCE) public appearance: ConfiguratorAppearance) { }
   
}



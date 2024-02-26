import { Component, Inject, Input, Optional } from '@angular/core';
import { APPLICATION_APPEARANCE, ApplicationAppearance } from '../appearance/appearance.token';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'lib-canvas-container',
  standalone: true,
  imports: [CanvasComponent],
  templateUrl: './canvas-container.component.html',
  styleUrl: './canvas-container.component.css',
  // providers: [{ provide: CONFIGURATOR_APPEARANCE, useValue: "squared"}]
})
export class CanvasContainerComponent {

  constructor(@Inject(APPLICATION_APPEARANCE) public appearance: ApplicationAppearance) {
  }

}



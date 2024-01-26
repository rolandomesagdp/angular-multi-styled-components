import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CanvasComponent, CanvasContainerComponent } from 'reusable-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CanvasComponent, CanvasContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui';
}

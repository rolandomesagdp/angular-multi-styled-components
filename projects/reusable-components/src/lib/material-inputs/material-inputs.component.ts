import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'lib-material-inputs',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule,
    MatCheckboxModule, MatRadioModule, MatSelectModule],
  providers: [
    provideAnimations()
  ],
  templateUrl: './material-inputs.component.html',
  styleUrl: './material-inputs.component.css'
})
export class MaterialInputsComponent {

}

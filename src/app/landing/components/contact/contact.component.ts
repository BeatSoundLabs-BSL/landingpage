import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatRadioButton, MatRadioGroup, MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    MatButton,
    MatInput,
    MatLabel,
    MatRadioButton,
    MatFormFieldModule,
    MatRadioModule,
    MatRadioGroup
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}

import { Component } from '@angular/core';
import {MatAnchor, MatButton} from '@angular/material/button';

@Component({
  selector: 'app-call-to-action',
  imports: [
    MatButton,
    MatAnchor
  ],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css'
})
export class CallToActionComponent {

}

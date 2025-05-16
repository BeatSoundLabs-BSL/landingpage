import { Component } from '@angular/core';
import {MatAnchor, MatButton} from '@angular/material/button';

@Component({
  selector: 'app-hero',
  imports: [
    MatButton,
    MatAnchor
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}

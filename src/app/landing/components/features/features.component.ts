import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgForOf
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    { title: 'Calendario de reservas', desc: 'Lorem ipsum dolor sit amet...' },
    { title: 'Registros de uso', desc: 'Lorem ipsum dolor sit amet...' },
    { title: 'Alertas por exceso de ruido', desc: 'Lorem ipsum dolor sit amet...' },
    { title: 'Búsqueda por cercanía', desc: 'Lorem ipsum dolor sit amet...' },
  ];
}

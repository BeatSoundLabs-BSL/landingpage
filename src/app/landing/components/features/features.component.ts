import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
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

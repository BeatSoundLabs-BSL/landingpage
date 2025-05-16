import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from '@angular/material/grid-list';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-features',
  imports: [
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardContent,
    NgForOf,
    MatIcon
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features = [
    {
      title: 'Calendario de reservas',
      desc: 'Sistema intuitivo para gestionar y programar el uso de tus salas de ensayo sin complicaciones.',
      icon: 'calendar_today'
    },
    {
      title: 'Registros de uso',
      desc: 'Seguimiento detallado del uso de tus espacios con métricas claras y reportes personalizados.',
      icon: 'insert_chart'
    },
    {
      title: 'Alertas por exceso de ruido',
      desc: 'Notificaciones instantáneas cuando se detectan niveles de sonido por encima de los límites establecidos.',
      icon: 'notifications_active'
    },
    {
      title: 'Búsqueda por cercanía',
      desc: 'Encuentra fácilmente las salas de ensayo más cercanas a tu ubicación con nuestro sistema de geolocalización.',
      icon: 'location_on'
    },
  ];
}

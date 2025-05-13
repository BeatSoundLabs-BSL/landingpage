import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule,
    MatDividerModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Opciones del menú
  menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Cómo funciona', path: '#how-it-works' },
    { name: 'Características', path: '#features' },
    { name: 'Contacto', path: '#contact' }
  ];
}

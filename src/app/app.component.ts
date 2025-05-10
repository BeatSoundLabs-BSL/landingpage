import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeroComponent} from './landing/components/hero/hero.component';
import {HowItWorksComponent} from './landing/components/how-it-works/how-it-works.component';
import {FeaturesComponent} from './landing/components/features/features.component';
import {CallToActionComponent} from './landing/components/call-to-action/call-to-action.component';
import {ContactComponent} from './landing/components/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, HowItWorksComponent, FeaturesComponent, CallToActionComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landingpage';
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <section class="fontRaleway">
      <div><app-navbar></app-navbar></div>
      <h1>SAKURA RAMEN</h1>
      <h4>BEST RAMEN IN TOWN</h4>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class LandingPageComponent {}

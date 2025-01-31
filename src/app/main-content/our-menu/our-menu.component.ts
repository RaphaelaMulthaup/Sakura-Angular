import { Component } from '@angular/core';
import { PricesComponent } from './prices/prices.component';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [PricesComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}

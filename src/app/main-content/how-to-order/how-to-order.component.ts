import { Component } from '@angular/core';
import { OrderInstructionComponent } from './order-instruction/order-instruction.component';

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [OrderInstructionComponent],
  templateUrl: './how-to-order.component.html',
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {

}

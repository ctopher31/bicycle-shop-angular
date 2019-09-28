import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-lineitem',
  templateUrl: './lineitem.component.html',
  styleUrls: ['./lineitem.component.scss']
})
export class LineitemComponent {
  @Input() item;

  constructor(public cartService: CartService) {}
}

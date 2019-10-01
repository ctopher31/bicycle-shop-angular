import { Component, Input } from '@angular/core';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-lineitem',
  templateUrl: './lineitem.component.html',
  styleUrls: ['./lineitem.component.scss']
})
export class LineitemComponent {
  @Input() item;

  constructor(public cart: Cart) {}
}

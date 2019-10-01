import { Component } from '@angular/core';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public cart: Cart) {}
}

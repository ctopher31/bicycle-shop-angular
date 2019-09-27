import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Observable, of, fromEvent } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items = [];
  shipping = 0;
  subtotal = 0;
  total = 0;
  cartCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.subtotal = this.cartService.getSubTotal();
    this.shipping = this.cartService.getShipping();
    this.cartCount = this.cartService.getCartCount();
  }

  removeItem(key) {
    this.cartService.removeItem(key);
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.subtotal = this.cartService.getSubTotal();
    this.shipping = this.cartService.getShipping();
    this.cartCount = this.cartService.getCartCount();
  }

  removeItemHandler(key) {
    this.removeItem(key);
    return fromEvent(document, 'click');
  }
}

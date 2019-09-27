import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import data from '../products';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = data.products;
  }

  addItem(key) {
    this.cartService.addItem(key);
  }
}

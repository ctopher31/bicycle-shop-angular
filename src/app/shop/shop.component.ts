import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Cart } from '../cart.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items = [];

  constructor(
    private productService: ProductService,
    private cart: Cart,
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.items = products);
  }

  addItem(key) {
    this.cart.addItem(key);
  }
}

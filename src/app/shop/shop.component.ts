import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  items = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.items = products);
  }

  addItem(key) {
    this.cartService.addItem(key);
  }
}

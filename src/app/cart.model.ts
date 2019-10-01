import { Injectable } from '@angular/core';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class Cart {
  items = [];
  cartCount = 0;
  subtotal = 0;
  total = 0;
  shipping = 0;

  constructor(private productService: ProductService) {}

  addItem(key) {
    let cart;

    if (this.items.filter(item => item.number === key).length === 1) {
      cart = this.items.map(item => {
        if (item.number === key) {
          item.qty += 1;
        }
        return item;
      });
    } else {
      this.productService.getProducts().subscribe(products => cart = [...this.items, { ...products.filter(product => product.number === key)[0], qty: 1 }]);
    }

    const subtotal = cart.reduce((accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)), 0);

    const cartCount = cart.reduce((accum, item) => (accum +=  item.qty), 0);

    this.items = cart;
    this.cartCount = cartCount;
    this.subtotal = subtotal;
    this.productService.getShipping().subscribe(shipping => this.total = (subtotal > 0 ? subtotal + shipping : 0));
    this.productService.getShipping().subscribe(shipping => this.shipping = (subtotal > 0 ? shipping : 0));
  }

  removeItem(key) {
    const cart = this.items.reduce((accum, item) => {
      if (item.number === key) {
        if (item.qty > 1) {
          item.qty -= 1;
          return [...accum, item];
        }
        return [...accum];
      }
      return [...accum, item];
    }, []);

    const subtotal = cart.reduce((accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)), 0);

    const cartCount = cart.reduce((accum, item) => (accum +=  item.qty), 0);

    this.items = cart;
    this.cartCount = cartCount;
    this.subtotal = subtotal;
    this.productService.getShipping().subscribe(shipping => this.total = (subtotal > 0 ? subtotal + shipping : 0));
    this.productService.getShipping().subscribe(shipping => this.shipping = (subtotal > 0 ? shipping : 0));
  }

  clearCart() {
    this.items = [];
    this.cartCount = 0;
    this.subtotal = 0;
    this.total = 0;
    this.shipping = 0;
  }
}

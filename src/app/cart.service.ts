import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  cartCount = 0;
  subtotal = 0;
  total = 0;
  shipping = 0;

  cartCount$ = of(this.cartCount);

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
      cart = [...this.items, { ...data.products.filter(product => product.number === key)[0], qty: 1 }]
    }

    const subtotal = cart.reduce((accum, item) => (accum += item.qty * (item.onSale === true ? item.salePrice : item.price)), 0);

    const cartCount = cart.reduce((accum, item) => (accum +=  item.qty), 0);

    this.items = cart;
    this.cartCount = cartCount;
    this.subtotal = subtotal;
    this.total = (subtotal > 0 ? subtotal + data.shipping : 0);
    this.shipping = (subtotal > 0 ? data.shipping : 0);
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
    this.total = (subtotal > 0 ? subtotal + data.shipping : 0);
    this.shipping = (subtotal > 0 ? data.shipping : 0);
  }

  getItems() {
    return this.items;
  }

  getCartCount() {
    return this.cartCount;
  }

  getSubTotal() {
    return this.subtotal;
  }

  getTotal() {
    return this.total;
  }

  getShipping() {
    return this.shipping;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}

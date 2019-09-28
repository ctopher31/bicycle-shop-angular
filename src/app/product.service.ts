import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import data from './products';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [];
  shipping = 0;

  constructor() {
    this.products = data.products;
    this.shipping = data.shipping;
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getShipping(): Observable<number> {
    return of(this.shipping);
  }
}

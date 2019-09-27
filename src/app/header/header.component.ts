import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;

  constructor(private cartService: CartService) { 
    this.cartService.cartCount$.subscribe(
      next => {
        this.cartCount = next;
        console.log(next);
      },
      err => console.log(err),
    );
  }

  ngOnInit() {
    this.cartService.cartCount$.subscribe(val => this.cartCount = val);
  }
}

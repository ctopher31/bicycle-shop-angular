import { TestBed } from '@angular/core/testing';

import { Cart } from './cart.model';

describe('Cart', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const cart: Cart = TestBed.get(Cart);
    expect(cart).toBeTruthy();
  });
});

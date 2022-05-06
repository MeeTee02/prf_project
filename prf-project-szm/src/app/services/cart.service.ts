import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  cartItems: any = {};

  constructor() { }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(key: number) {
    if(!(key in this.cartItems)) {
      this.cartItems.key = 1;
    } else {
      this.cartItems[key]++;
    }
  }


}

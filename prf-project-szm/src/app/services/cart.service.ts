import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Item[] = [];

  constructor(private afs: AngularFirestore) { }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: Item) {
    this.cartItems.push(item);
  }

  async orderProducts(totalCost: number) {
    let productNames = '';
    this.cartItems.forEach(item => {
      productNames += item.name + ';';
    })
    const data = {
      uid: localStorage.getItem('user'),
      products: productNames,
      totalCost: totalCost,
    };
    return await this.afs.collection('Orders').add(data);
  }
}

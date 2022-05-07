import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from './../models/item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [];

  constructor(private afs: AngularFirestore) { }

  getItems() {
    this.items = [];
    this.afs.collection('Items').get().subscribe(res => {
      res.docs.forEach((doc: any) => {
        this.items.push(new Item(doc.data().name, doc.data().price, doc.data().image));
      })
    }), error => {
      console.log(error);
    };

    return this.items;
  }

  async addItem(item: Item) {
    this.afs.collection('Items').doc(item.name).get().subscribe(async res => {
      if (res.exists) {
        alert('This product already exists!');
        return;
      } else {
        alert('Product added successfully!');
        return await this.afs.collection('Items').doc(item.name).set(item);
      }
    });


  }

  async updateItem(item: Item) {
    this.afs.collection('Items').doc(item.name).get().subscribe(async res => {
      if (res.exists) {
        alert('Product updated successfully!');
        return await this.afs.collection('Items').doc(item.name).set(item);
      } else {
        alert('The product with this name doesn\'t exist');
        return;
      }
    });
  }
}

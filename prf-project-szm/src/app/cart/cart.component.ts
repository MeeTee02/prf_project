import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  totalCost: number = 0;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();
    this.items.forEach(item => {
      this.totalCost += item.price;
    })
  }

  orderProducts() {
    this.cartService.orderProducts(this.totalCost).then(() => {
      alert('Thank you for your order!')
      this.router.navigate(['/home']);
    });
  }

}

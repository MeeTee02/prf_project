import { CartService } from './../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() price: number;
  @Input() image: string;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  buyItem() {
    this.cartService.addToCart(new Item(this.name, this.price, this.image));
  }
}

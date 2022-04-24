import { ItemService } from './../services/item.service';
import { Item } from './../models/item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() price: number;
  @Input() img: string;
  constructor() { }

  ngOnInit(): void {
  }

}

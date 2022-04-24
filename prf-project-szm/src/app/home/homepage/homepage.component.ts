import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  items: Item[] = [];
  constructor(private loginService: LoginService, private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  logout(): void {
    this.loginService.logout();
  }
}

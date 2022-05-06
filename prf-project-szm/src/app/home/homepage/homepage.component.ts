import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  items: Item[] = [];
  constructor(private loginService: LoginService, private itemService: ItemService, private router: Router, private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  logout(): void {
    this.loginService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}

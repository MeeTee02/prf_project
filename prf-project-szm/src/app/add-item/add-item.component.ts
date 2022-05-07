import { ItemService } from './../services/item.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  addItemForm!: FormGroup;

  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required])
    });
  }

  onFormSubmit() {
    if (!this.addItemForm.valid) {
      return;
    }

    this.itemService.addItem(this.addItemForm.value).then(() =>{
      this.router.navigate(['/home'])
    });
  }
}

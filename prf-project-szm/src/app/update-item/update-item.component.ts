import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  updateItemForm!: FormGroup;

  constructor(private router: Router, private itemService: ItemService) {}

  ngOnInit(): void {
    this.updateItemForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      image: new FormControl(null, [Validators.required])
    });
  }

  onFormSubmit() {
    if (!this.updateItemForm.valid) {
      return;
    }

    this.itemService.updateItem(this.updateItemForm.value).then(() =>{
      this.router.navigate(['/home'])
    });
  }
}

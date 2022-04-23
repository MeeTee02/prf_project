import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private router: Router) { }

  signUp() {
    this.router.navigate(['/login'])
  }
}

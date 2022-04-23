import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router) {}

  login(userData: { email: string; password: string }) {
    if (
      userData.email === 'test@gmail.com' &&
      userData.password === 'test1234'
    ) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  generateToken() {
    localStorage.setItem('loggedInToken', Math.random().toString());
    this.router.navigate(['/home']);
  }

  getLoggedInToken() {
    return !!localStorage.getItem('loggedInToken');
  }
}

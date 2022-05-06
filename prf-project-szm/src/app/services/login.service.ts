import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private router: Router, private auth: AngularFireAuth) {}

  login(userData: { email: string; password: string }) {
    return this.auth.signInWithEmailAndPassword(userData.email, userData.password);
  }

  logout() {
    localStorage.clear();
    return this.auth.signOut();
  }

  generateToken(res: any) {
    localStorage.setItem('user', res.user.uid);
    this.router.navigate(['/home']);
  }

  getLoggedInToken() {
    return !!localStorage.getItem('user');
  }

  signUp(userData: {email: string, password: string}) {
    return this.auth.createUserWithEmailAndPassword(userData.email, userData.password);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  token: string = '';
  error: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onFormSubmit() {
    if (!this.signInForm.valid) {
      return;
    }

    if (this.loginService.login(this.signInForm.value)) {
      this.error = false;
      this.loginService.generateToken();
    } else {
      this.error = true;
    }

    /* this.usersService.login(this.signInForm.value).subscribe({
      next: (v: any) => {
        this.error = false;
        this.usersService.saveAccessToken(v.accessToken);
      },
      error: (e: any) => {
        if (e.status == '401') {
          this.error = true;
        }
      },
    }); */
  }
}

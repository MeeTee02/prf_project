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

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();

    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onFormSubmit() {
    if (!this.signInForm.valid) {
      return;
    }

    this.loginService.login(this.signInForm.value).then((res) => {
      this.loginService.generateToken(res);
    }).catch((e) => {
      this.error = true;
    })

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

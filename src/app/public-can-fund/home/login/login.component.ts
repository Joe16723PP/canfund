import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/authService/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  errorCode: string;
  isError = false;
  loginGroup: FormGroup;
  hide = true;

  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loginGroup = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  onGmailLogin() {
    this.authService.onGoogleLogin().then(value => {
      console.log(value.user);
      this.snackBar.open('Redirecting...', 'close', {duration: 3000});
      setTimeout(() => {
        window.location.replace('/');
      }, 1000);
    }).catch((reason) => {
      this.errorMessage = reason.message;
      this.isError = true;
      this.snackBar.open(this.errorMessage, 'close', {duration: 5000});
    });
  }

  onSubmit() {
    console.log(this.loginGroup.value);
  }
}

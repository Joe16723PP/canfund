import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/services/authService/auth.service';
import {regex} from '../../shared/data/const/validator';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  siteKey = environment.recaptchaSiteKey;
  signUpForm: FormGroup;
  hide = true;
  errorMessage: string;
  isError: boolean;

  constructor(private authService: AuthService, public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(regex.email)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      displayName: new FormControl('', [Validators.required, Validators.pattern(regex.displayName), Validators.minLength(6)]),
      reCaptcha: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    // console.log(this.signUpForm.value);
    this.authService.onRegisterWithEmail(this.signUpForm.value)
      .then(value => {
        this.snackBar.open('Redirecting...', 'close', {duration: 3000});
        setTimeout(() => {
          window.location.replace('/');
        }, 1000);
    }).catch(reason => {
      this.errorMessage = reason.message;
      this.isError = true;
      this.snackBar.open(this.errorMessage, 'close', {duration: 5000});
    });
  }

}

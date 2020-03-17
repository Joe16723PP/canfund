import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/authService/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  siteKey = environment.recaptchaSiteKey;
  signUpForm: FormGroup;
  hide = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      reCaptcha: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}

import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide = true;
  error: string = '';
  emailFormControl = new FormControl('');

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  options: AnimationOptions = {
    path: './assets/46541-nature-visite-travel.json'
  };

  constructor(private fb: FormBuilder) { }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  login() {
    console.log(this.loginForm.value);
  }
}

import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  hide = true;
  error : string = '';
  loginForm = this.fb.group({
    email:'',
    password:''
  });

  options: AnimationOptions = {    
    path: './assets/46541-nature-visite-travel.json'  
  };  

  constructor(private fb: FormBuilder) { }  

  onAnimate(animationItem: AnimationItem): void {    
    console.log(animationItem);  
  }

  login() {
    throw new Error('Method not implemented.');
  }
}

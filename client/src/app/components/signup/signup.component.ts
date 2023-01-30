import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  error: string = '';

  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);
  // dobFormControl = new FormControl('', [Validators.required]);
  // phoneNumberFormControl = new FormControl('', [Validators.required]);
  // countryFormControl = new FormControl('', [Validators.required]);
  // passportFormControl = new FormControl('', [Validators.required]);


  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    // dob:'',
    phoneNumber: new FormControl('',Validators.required)
    // country:'',
    // passport:''
  });

  options: AnimationOptions = {
    path: './assets/46541-nature-visite-travel.json'
  };

  constructor(private fb: FormBuilder) { }

  onAnimate(animationItem: AnimationItem): void {
    //console.log(animationItem);  
  }

  signup() {
    console.log(this.signupForm.value);

  }
}

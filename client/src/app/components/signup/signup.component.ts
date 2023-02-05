import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isSubmitted: boolean = false;
  userError: string = '';
  isError: boolean = false;
  isPassError: boolean = false;


  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    dateOfBirth: new FormControl(''),
    phoneNumber: new FormControl(''),
    country: new FormControl(''),
    passport: new FormControl('')
  });

  options: AnimationOptions = {
    path: './assets/46541-nature-visite-travel.json'
  };

  constructor(private auth: AuthService,
    private router: Router) { }

  onAnimate(animationItem: AnimationItem): void {
    //console.log(animationItem);  
  }

  signup() {
    let { firstName, lastName, email, passport, dateOfBirth, password, confirmPassword, country, phoneNumber } = this.signupForm.value;

    //checking is form is valid
    if (firstName && lastName && email && passport && dateOfBirth && password && confirmPassword && country && phoneNumber) {

      this.isError = false;

      if (password === confirmPassword) {

        this.isPassError = false;
        //converting the angular date object to string to avoid complexity
        // console.log(dob, typeof dob);
        console.log(this.signupForm.value);
        let dob = new Date(dateOfBirth);
        

        this.auth.signUp({ firstName, lastName, email, passport, password, country, phoneNumber, dob }).subscribe({
          next: response => {
            console.log(response);
            this.isError = false;
            this.isSubmitted = true;
            this.signupForm.reset();

            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1000)
          },
          error: error => {
            this.userError = error.error.message;
            this.isError = true;
          }
        });
      }
      else {
        this.isPassError = true;
        this.userError = 'Password did not match';
      }
    }

  }
}

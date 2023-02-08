import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import countries from '../../_files/countries.json'
import { map, Observable, startWith } from 'rxjs';
import { Country } from 'src/app/interfaces/countries';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  countryList:Country[] = countries
  hidePass: boolean = true;
  hideConfirmPass: boolean = true;
  
  isSubmitted: boolean = false;
  userError: string = '';
  isError: boolean = false;
  isPassError: boolean = false;
 
  today = new Date();
  minAge = 18;
  validAge = new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());


  
  // options = this.countryList;
  // filteredOptions: Observable<Country[]> | undefined;

  // ngOnInit() {
  //   this.filteredOptions = this.signupForm.get('country')?.valueChanges.pipe(
  //     startWith(''),
  //     map((value: { name: string }) => {
  //       const name = typeof value === 'string' ? value : value?.name;
  //       return name ? this._filter(name as string) : this.countryList.slice();
  //     }),
  //   );
  // }

  // displayFn(user: any): string {
  //   return user && user.name ? user.name : '';
  // }

  // private _filter(name: string): Country[] {
  //   const filterValue = name.toLowerCase();

  //   return this.countryList.filter(option => option.name.toLowerCase().includes(filterValue));
  // }

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
    private router: Router, ) { }

  onAnimate(animationItem: AnimationItem): void {
  }

  signup() {
    let { firstName, lastName, email, passport, dateOfBirth, password, confirmPassword, country, phoneNumber } = this.signupForm.value;

    if (firstName && lastName && email && passport && dateOfBirth && password && confirmPassword && country && phoneNumber) {

      this.isError = false;

      if (password === confirmPassword) {

        this.isPassError = false;
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

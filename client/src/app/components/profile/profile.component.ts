import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ApiClientService } from 'src/app/service/api-client.service';
import { AuthService } from 'src/app/service/auth.service';
import { AmadeusService } from 'src/app/service/amadeus.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  msg: string ="";
  isError: boolean= true;
  

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    passport: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
  });

  constructor(
    private apiClient: ApiClientService,
    private router : Router
  ) { }
  
  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.apiClient.getProfile().subscribe((response) => {
      let { firstName, lastName, email, dob, passport, country, phoneNumber } = response;

      let dateOfBirth = dob.toString();
      this.profileForm.patchValue({
        firstName,
        lastName,
        email,
        passport,
        dateOfBirth,
        country,
        phoneNumber
      });

    });
  }

  updateProfile(){
    const {firstName,lastName,email,passport,dateOfBirth,country,phoneNumber} = this.profileForm.value;
    this.apiClient.updateProfile(firstName!,lastName!,email!,passport!,dateOfBirth!,country!,phoneNumber!)
      .subscribe({
        next: (res: any) => {
          this.msg = "Successfully updated the profile!";
          this.isError = false;
        },
        error: error => this.msg = error.error
      });
  }

  skip() {
    this.router.navigate(['/'])
  }
  
}

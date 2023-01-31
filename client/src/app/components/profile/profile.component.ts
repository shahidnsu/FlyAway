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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  msg: string ="";

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
    private amadeusClient: AmadeusService
  ) { }
  ngOnInit(): void {
    this.getProfile();
    //this.getAirports();
  }

  // just for testing purpose
  getAirports() {
    this.amadeusClient.airportSearch('lon').subscribe((response) => {
      console.log(response);
    });
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
      .subscribe(() => {});
    this.msg = "Successfully updated the profile!"
  }

  skip() {
    throw new Error('Method not implemented.');
  }
  
}

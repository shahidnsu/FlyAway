import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiClientService } from 'src/app/service/api-client.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm = new FormGroup({
    // fullname: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    passport: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),

  })

  constructor(private apiClient: ApiClientService) { }
  ngOnInit(): void {
    this.getProfile();

  }

  getProfile() {
    this.apiClient.getProfile().subscribe(response => {
      let { firstName, lastName, email, dob, passport, country, phoneNumber } = response;
      // const fullname = firstName + ' ' + lastName;
      let dateOfBirth = dob.toString();
      this.profileForm.patchValue({ firstName, lastName, email, passport, dateOfBirth, country, phoneNumber})
    });
  }

  skip() {
    throw new Error('Method not implemented.');
  }
  confirm() {
    console.log(this.profileForm.value);
  }
}

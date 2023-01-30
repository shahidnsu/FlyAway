import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    passport: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required)
  })

  skip() {
    throw new Error('Method not implemented.');
  }
  confirm() {
    console.log(this.profileForm.value);
  }
}

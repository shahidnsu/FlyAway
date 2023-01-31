import { AmadeusService } from './../../service/amadeus.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-login',
  templateUrl: './test-login.component.html',
  styleUrls: ['./test-login.component.css']
})
export class TestLoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private amadeusApi: AmadeusService) { 
  }
  ngOnInit(): void {
    this.test()
  }

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  })

  signup(){
    console.log(this.loginForm.value);
  }
  test(){
    this.amadeusApi.flightSearch();
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  hide: boolean = true;

  isSubmitted: boolean = false;
  userError: string = '';
  isError: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('')
  })

  options: AnimationOptions = {
    path: './assets/46541-nature-visite-travel.json'
  };

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private router:Router
    ) { 
      localStorage.clear();
    }

  onAnimate(animationItem: AnimationItem): void {
  }

  login() {
    if (this.loginForm.valid) {

      this.auth.login(this.loginForm.value.email!, this.loginForm.value.password!).subscribe({
        next: (response: any) => {

          console.log(response.body.email);
          localStorage.setItem('token', response.headers.get('authorization'));
          localStorage.setItem('user', response.body.email);

          this.isError = false;
          this.isSubmitted = true;
          this.loginForm.reset();

          setTimeout(() => {
            this.router.navigate(['search-flights']);
          }, 1000)
          
        },
        error: error => {
          this.userError = error.error.message;
          this.isError = true;
        }
      });
    }
  }
}

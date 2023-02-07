import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = './assets/FlyAwayLogo.svg'

  user: string | null = ''

  constructor(public router: Router, private auth: AuthService) { }
  ngOnInit(): void {
    this.authCheck();
    this.router.events.subscribe(() => {
      this.authCheck();
    })
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  login() {
    this.router.navigate(['login']);
  }
  authCheck() {
    this.user = this.auth.getUser();
  }

  toolbarColor() {
    
  }

}

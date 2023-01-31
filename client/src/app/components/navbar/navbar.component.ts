import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logo = './assets/FlyAwayLogo.svg'

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}

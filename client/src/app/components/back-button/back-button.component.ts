import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {

  @Input() prev! : string;
  constructor (private router: Router, private location: Location) {}
  
  backButton () {
    if (this.prev === 'last') {
      this.location.back()
    } else {
      this.router.navigate([this.prev]);
    }
  }
}

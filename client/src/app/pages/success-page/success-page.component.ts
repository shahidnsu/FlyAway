import { Component } from '@angular/core';
import { ApiClientService } from 'src/app/service/api-client.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css'],
})
export class SuccessPageComponent {
  constructor(
    private route: Router,
    private flightService: ApiClientService,
    private http: HttpClient
  ) { }
  selectedFlights = JSON.parse(localStorage.getItem('trip')!);
  ngOnInit() {
    this.flightService
      .createTripList(this.selectedFlights)
      .subscribe((res) => console.log(res));
  }
}

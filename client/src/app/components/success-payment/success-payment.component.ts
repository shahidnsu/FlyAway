import { Component } from '@angular/core';
import { ApiClientService } from 'src/app/service/api-client.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-success-payment',
  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.css']
})
export class SuccessPaymentComponent {
  constructor(private route: Router, private flightService: ApiClientService,
    private http:HttpClient) {}

  
  selectedFlights = JSON.parse(localStorage.getItem("trip")!)
  ngOnInit() {
   
    
    this.flightService.createTripList(this.selectedFlights).subscribe(res=>console.log(res));
    
    //this.route.navigate(['trip-history'])
  }
 

}

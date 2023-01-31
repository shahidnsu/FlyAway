import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AmadeusService {

  constructor(private apiClient:HttpClient) { }

  apiUrl = "http://localhost:3000";

  flightSearch(){
     this.apiClient.get(`${this.apiUrl}/flight-search`).subscribe(res=>console.log(res));
  }
}

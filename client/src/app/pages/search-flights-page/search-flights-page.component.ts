import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/interfaces/flight';
import { AmadeusService } from 'src/app/service/amadeus.service';

interface formValue {
  from: string,
  to: string,
  date: Date,
  availableFlights: Flight[]
}

@Component({
  selector: 'app-search-flights-page',
  templateUrl: './search-flights-page.component.html',
  styleUrls: ['./search-flights-page.component.css']
})



export class SearchFlightsPageComponent implements OnInit {

  obj = {
    'FromLocation':'Dhaka',
    'FromAirPort':'Shahjalal Int Airport',
    'ToLocation': 'Dubai',
    'ToAirPort': 'Sarjah Int Airport',
    'Date': '12/02/2023'
  }

  newLeg:any = {
    from: '',
    to: '',
    date: ''
  }

  i: number = 0
  

  constructor(private amadeus:AmadeusService){}

  ngOnInit(): void {
    
    console.log('parent',this.newLeg)
    
  }

  
  newArray: any=[]
  travelFormArray:any = [{
    from: '',
    to: '',
    date: Date,
    availableFlights : []
  }]

  resFeedFunc(){
    const originCode = this.newLeg.from.replace(/\s/g, '').split('-')[1]
    const destinationCode = this.newLeg.to.replace(/\s/g, '').split('-')[1]
    const date = this.newLeg.date;

    for( ;this.i<this.travelFormArray.length;this.i++){
      this.amadeus.searchFlight({originCode,destinationCode,date}).subscribe({next:res=>{
        console.log('call the I',res);
        console.log('call the I',this.i);
        
        this.travelFormArray[this.i-1].availableFlights.push(res)
        console.log('updated array',this.travelFormArray)
      },
      error:error=>{
  
      }
      })
    }
    
  }
  travelFormSubmit(){
    this.resFeedFunc()
    this.newArray = [...this.travelFormArray]
    this.newArray.push({...this.newLeg})
    console.log(this.newArray)
  }
  
  addNewLocation(){
    this.resFeedFunc()
    this.travelFormArray.push({...this.newLeg})
    console.log(this.travelFormArray)
  }
}



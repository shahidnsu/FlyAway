import { Component, OnInit } from '@angular/core';
import { AmadeusService } from 'src/app/service/amadeus.service';

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
  travelFormSubmit(){
    this.newArray = [...this.travelFormArray]
    this.newArray.push({...this.newLeg})
    console.log(this.newArray)
  }
  
  addNewLocation(){
    const originCode = this.newLeg.from.replace(/\s/g, '').split('-')[1]
    const destinationCode = this.newLeg.to.replace(/\s/g, '').split('-')[1]
    const date = this.newLeg.date;

    // console.log('search flight',originCode+' '+destinationCode+' '+date);

    // console.log('new leg',this.newLeg);

    this.amadeus.searchFlight({originCode,destinationCode,date}).subscribe({next:res=>{
      console.log(res);
      // this.travelFormArray.availableFlights.push(...res)
      // console.log('updated array',this.travelFormArray.availableFlights)
    },
    error:error=>{

    }
  })

    // console.log()
    this.travelFormArray.push({...this.newLeg})
    if(this.travelFormArray.length>1){
      let latestTo = this.travelFormArray[this.travelFormArray.length-1]
      // console.log('latestTo', latestTo)
    }
    
    // console.log(this.travelFormArray)
    // console.log('Parent Submit',this.newLeg)
    // this.travelFormArray.shift()
    console.log(this.travelFormArray)
  }
}



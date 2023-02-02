import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/interfaces/flight';
import { AmadeusService } from 'src/app/service/amadeus.service';
import { FlightService } from 'src/app/service/flight.service';

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
  nav = false;

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
    date: Date,
    availableFlights : [],
    isFailed: false,
    isSuccess: false,
  }

  flag:number=0 

  constructor(private amadeus:AmadeusService, private router:Router, private _FlightService: FlightService){}

  ngOnInit(): void {
    
    console.log('parent',this.newLeg)
    
  }

  
  newArray: any=[]
  travelFormArray:any = [{
    from: '',
    to: '',
    date: Date,
    isFailed: false,
    isSuccess: false,
    // availableFlights : []
  }]

  resFeedFunc(){
    const originCode = this.newLeg.from.replace(/\s/g, '').split('-')[1]
    const destinationCode = this.newLeg.to.replace(/\s/g, '').split('-')[1]
    const date = this.newLeg.date;

    this.amadeus.searchFlight({originCode,destinationCode,date}).subscribe({next:res=>{
      
      if(res.length){
        this.newLeg.isSuccess=true
        this.newLeg.isFailed= false
      }
      else{
        this.newLeg.isFailed=true
        this.newLeg.isSuccess=false
      }
      
      let newObj = {availableFlights:res}
      console.log('newObj',newObj)
      Object.assign(this.newLeg,newObj)
      console.log('newLeg',this.newLeg)
      // this.newLeg.availableFlights.push([...res])
      // this.travelFormArray[this.i-1].availableFlights.push(res)
      this.travelFormArray.push({...this.newLeg})
      
      console.log('updated array',this.travelFormArray)
      console.log('flag',this.flag)
       
    },
    error:error=>{

      }
    })
    
    
  }

  resFeedFuncSubmit(){
    const originCode = this.newLeg.from.replace(/\s/g, '').split('-')[1]
    const destinationCode = this.newLeg.to.replace(/\s/g, '').split('-')[1]
    const date = this.newLeg.date;

    this.amadeus.searchFlight({originCode,destinationCode,date}).subscribe({next:res=>{
    
        
        let newObj = {availableFlights: res}
        console.log('newObj',newObj)
        Object.assign(this.newLeg,newObj)
        console.log('newLeg',this.newLeg)
        // this.newLeg.availableFlights.push([...res])
        // this.travelFormArray[this.i-1].availableFlights.push(res)
        // this.travelFormArray.push({...this.newLeg})
        this.newArray = [...this.travelFormArray]
        this.newArray.push({...this.newLeg})
        // this.newArray = this.newArray.map((item:any) => {
        //   return {from: item.from, to: item.to, date: item.date, availableFlights: item.availableFlights}
        // })
        console.log('updated array',this.newArray)
        this._FlightService.flightsData = this.newArray
        console.log('AAAAAAAAAAA', this._FlightService.getSearchedFlights());
        this.newArray = this.newArray.map((item:any) => {
          return {from: item.from, to: item.to, date: item.date, availableFlights: item.availableFlights}
        })
        // console.log('service data', this._FlightService.flightsData)
        this.nav = true;
        // while(this._FlightService.getSearchedFlights()){
          
        // }
        
        this.navigate();
        
      
      
    },
    error:error=>{

    }
    })
    
    
  }

  travelFormSubmit(){
    this.resFeedFuncSubmit()
    // this.newArray = [...this.travelFormArray]
    // this.newArray.push({...this.newLeg})
    console.log('search button newArray',this.newArray)
  }
  
  addNewLocation(){
    this.resFeedFunc()
    console.log('add new location button travelFormArray',this.travelFormArray)
  }

  navigate () {
    if(this.nav) this.router.navigate(['/select-flights'])
  }
}



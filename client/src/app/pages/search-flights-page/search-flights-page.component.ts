import { Component, OnInit } from '@angular/core';

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

  newLeg:Object = {
    'from': '',
    'to': '',
    'date': Date
  }

  constructor(){}
  ngOnInit(): void {
    console.log('parent',this.newLeg)
    // const objObservable = Observable.create()
    // this.newLeg.valueChanges.subscribe((value)=>{
    //   console.log(value)
    // })
  }
  // ngOnChanges(changes:any){
  //   // console.log(changes)
  //   const changeNewLeg = changes['newLeg']
  //   console.log(changes['newLeg'])
  // }
  
  travelFormArray:any = [{
    'from': '',
    'to': '',
    'date': Date
  }]
  travelFormSubmit(){
    console.log("travel form submitted")
  }
  
  addNewLocation(){
    this.travelFormArray.push({...this.newLeg})
    if(this.travelFormArray.length>1){
      let latestTo = this.travelFormArray[this.travelFormArray.length-1]
      console.log('latestTo', latestTo)
    }
    
    // console.log(this.travelFormArray)
    console.log('Parent Submit',this.newLeg)
    // this.travelFormArray.shift()
    console.log(this.travelFormArray)
  }
}



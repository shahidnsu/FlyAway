import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-date-and-places',
  templateUrl: './select-date-and-places.component.html',
  styleUrls: ['./select-date-and-places.component.css']
})

export class SelectDateAndPlacesComponent implements OnInit {


  @Input()
  addNewLocation!: () => void;
  @Input() 
  travelFormArray: any
  travelForm!: FormGroup;

  @Input() newLeg!: Object;

  ngOnInit(){
    this.travelForm = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
      date: new FormControl('')
    })
    if(this.travelFormArray.length>1){
      this.travelForm.controls['from'].setValue(this.travelFormArray[this.travelFormArray.length-1].to)
    }
    this.travelForm.valueChanges.subscribe((value)=>{
      console.log('child',value)
      Object.assign(this.newLeg, value)
      console.log('parent from child', this.newLeg)
    })
  }

  
  // parentFunc(){
  //   this.sendData.emit(this.travelForm.value)
  //   console.log(this.travelForm.value)
  // }

  // submitFlight(){
  //   console.log('Flight details submitted')
  // }
  
  }
  

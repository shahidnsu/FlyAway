import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.css']
})
export class TestInputComponent implements OnInit {
  @Input() type = '';
  @Input() inputId = '';
  @Input() label = '';
  @Input() placeHolder = '';
  @Input() control = new FormControl();

  constructor(){}
  ngOnInit(): void {
    
  }
}

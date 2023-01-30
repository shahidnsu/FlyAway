import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  @Input() type = '';
  @Input() inputId = '';
  @Input() label = '';
  @Input() placeHolder = '';
  @Input() control = new FormControl();

 ngOnInit(){
 
 }
}
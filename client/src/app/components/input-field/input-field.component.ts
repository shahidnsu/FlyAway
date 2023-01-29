import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
 @Input() label: string = "";
 @Input() type: string = "";
 @Input() holder!: string;
 @Input() formControl!: FormControl;
 //@Input() formC: string="";
 ngOnInit(){
  console.log(this.holder);
 }
}

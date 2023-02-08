import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {
  msg: string = ''
  okBtn: string = ''
  cancelBtn: string = ''

  constructor(@Inject(MAT_DIALOG_DATA) private result: any,private dialogRef: MatDialogRef<PopupComponent>) {
    if(result){
      this.msg = result.message;
      if (result.buttonText) {
        this.okBtn = result.buttonText.ok;
        this.cancelBtn = result.buttonText.cancel;
      }
   }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}

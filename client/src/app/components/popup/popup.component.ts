import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent {
  message: string = ''
  confirmButtonText: string = ''
  cancelButtonText: string = ''

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private dialogRef: MatDialogRef<PopupComponent>) {
    if(data){
      this.message = data.message;
      if (data.buttonText) {
        this.confirmButtonText = data.buttonText.ok;
        this.cancelButtonText = data.buttonText.cancel;
      }
   }
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}

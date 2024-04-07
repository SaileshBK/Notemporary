import { Component, Inject } from '@angular/core';
import { Pad } from '../../models/pad';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-pad-dialog',
  templateUrl: './new-pad-dialog.component.html',
  styleUrl: './new-pad-dialog.component.scss'
})
export class NewPadDialogComponent {
  pickedNoteName: string = '';

  constructor(
    public dialogRef: MatDialogRef<NewPadDialogComponent>
  ) { }

  onOkClick(): void {
    const randomId = uuidv4();
    const newPad: Pad = {
      id: randomId,
      name: this.pickedNoteName ?? randomId,
      content: '',
      top: 0,
      left: 0,
      visible: true,
      isRemoved: false
    };
    this.dialogRef.close(newPad);
  }
}

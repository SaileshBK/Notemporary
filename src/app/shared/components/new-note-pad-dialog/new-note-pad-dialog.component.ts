import { Component, Inject } from '@angular/core';
import { Note } from '../../models/note';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-note-pad-dialog',
  templateUrl: './new-note-pad-dialog.component.html',
  styleUrl: './new-note-pad-dialog.component.scss'
})
export class NewNotePadDialogComponent {
  pickedNoteName: string = '';

  constructor(
    public dialogRef: MatDialogRef<NewNotePadDialogComponent>
  ) { }

  onOkClick(): void {
    const randomId = uuidv4();
    const newPad: Note = {
      id: randomId,
      name: this.pickedNoteName || randomId,
      content: '',
      top: 0,
      left: 0,
      visible: true,
      isRemoved: false
    };
    this.dialogRef.close(newPad);
  }
}

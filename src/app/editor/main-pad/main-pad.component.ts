import { Component } from '@angular/core';

@Component({
  selector: 'app-main-pad',
  templateUrl: './main-pad.component.html',
  styleUrls: ['./main-pad.component.scss']
})
export class MainPadComponent {
  closeCard() {
    throw new Error('Method not implemented.');
  }

  isEditing = false;
  noteContent = '';
  top = 0;
  left = 0;

  startEditing() {
    this.isEditing = true;
  }

  stopEditing() {
    this.isEditing = false;
  }

  moveCard(event: MouseEvent) {
    this.top = event.clientY;
    this.left = event.clientX;
  }

}

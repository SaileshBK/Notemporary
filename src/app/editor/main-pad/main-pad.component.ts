import { Component, OnInit } from '@angular/core';
import { Pad } from 'src/app/shared/models/pad';
import { MainPadService } from 'src/app/shared/services/main-pad.service';
import { SanitizationService } from 'src/app/shared/services/sanitization.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-main-pad',
  templateUrl: './main-pad.component.html',
  styleUrls: ['./main-pad.component.scss']
})
export class MainPadComponent implements OnInit {
  showCard: boolean = false;
  isEditing = false;
  noteContent = '';
  top = 0;
  left = 0;
  pads: Pad[] = [];

  constructor(
    private cardService: MainPadService,
    private sanitizationService: SanitizationService
  ) { }

  ngOnInit() {
    this.cardService.currentCardState.subscribe(show => {
      if (show) {
        this.openNewPad();
      }
    });
  }

  openNewPad() {
    const newPad: Pad = {
      id: uuidv4(),
      content: '',
      top: 0,
      left: 0,
      visible: true
    };
    this.pads.push(newPad);
  }

  closeCard() {
    this.cardService.toggleCard(false);
  }

  startEditing() {
    this.isEditing = true;
  }

  stopEditing() {
    this.isEditing = false;
    this.sanitizationService.sanitize(this.noteContent);
  }

  moveCard(event: MouseEvent) {
    this.top = event.clientY;
    this.left = event.clientX;
  }
}

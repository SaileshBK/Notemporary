import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  currentPadId: string = '';

  @Output() minimizedData = new EventEmitter<Pad>();

  constructor(
    private cardService: MainPadService,
    private sanitizationService: SanitizationService
  ) { }

  ngOnInit() {
    this.cardService.createNewCardPad$.subscribe(createNewCard => {
      if (createNewCard) {
        this.openNewPad(createNewCard as Pad);
      }
    });

    this.cardService.minimizedData$.subscribe(data => {
      if (!this.pads.find(card => card.id === data.id)) {
        this.pads.push(data as Pad);
      }
    });
  }

  openNewPad(note: Pad) {
    this.pads.push(note);
  }

  minimizeCard(pad: Pad) {
    this.minimizedData.emit(pad);
    this.pads = this.pads.filter(card => card.id !== pad.id);
  }

  removeCard(pad: Pad) {
    pad.isRemoved = true;
    this.pads = this.pads.filter(card => card.id !== pad.id);
    this.minimizedData.emit(pad);
  }

  stopEditing(currentPad: Pad) {
    this.currentPadId = currentPad.id;
    currentPad.content = this.sanitizationService.sanitize(currentPad.content);
    this.pads = this.pads.map(pad => pad.id === currentPad.id ? currentPad : pad);
    this.isEditing = false;
  }

  moveCard(event: MouseEvent) {
    this.top = event.clientY;
    this.left = event.clientX;
  }
}

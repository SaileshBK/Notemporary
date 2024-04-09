import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { NotePadService } from 'src/app/shared/services/note-pad.service';
import { SanitizationService } from 'src/app/shared/services/sanitization.service';

@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.scss']
})
export class NotePadComponent implements OnInit {
  showCard: boolean = false;
  isEditing = false;
  noteContent = '';
  top = 0;
  left = 0;
  pads: Note[] = [];
  currentPadId: string = '';

  @Output() minimizedData = new EventEmitter<Note>();

  constructor(
    private cardService: NotePadService,
    private sanitizationService: SanitizationService
  ) { }

  ngOnInit() {
    this.cardService.createNewCardPad$.subscribe(createNewCard => {
      if (createNewCard) {
        this.openNewPad(createNewCard as Note);
      }
    });

    this.cardService.minimizedData$.subscribe(data => {
      if (!this.pads.find(card => card.id === data.id)) {
        this.pads.push(data as Note);
      }
    });
  }

  openNewPad(note: Note) {
    this.pads.push(note);
  }

  minimizeCard(pad: Note) {
    this.minimizedData.emit(pad);
    this.pads = this.pads.filter(card => card.id !== pad.id);
  }

  removeCard(pad: Note) {
    pad.isRemoved = true;
    this.pads = this.pads.filter(card => card.id !== pad.id);
    this.minimizedData.emit(pad);
  }

  stopEditing(currentPad: Note) {
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

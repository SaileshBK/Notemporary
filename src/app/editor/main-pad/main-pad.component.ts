import { Component, OnInit } from '@angular/core';
import { MainPadService } from 'src/app/shared/services/main-pad.service';
import { SanitizationService } from 'src/app/shared/services/sanitization.service';

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

  constructor(
    private cardService: MainPadService,
    private sanitizationService: SanitizationService
  ) { }

  ngOnInit() {
    this.cardService.currentCardState.subscribe(show => this.showCard = show);
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

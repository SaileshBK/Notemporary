import { Component, OnInit } from '@angular/core';
import { MainPadService } from 'src/app/shared/services/main-pad.service';

@Component({
  selector: 'app-main-pad',
  templateUrl: './main-pad.component.html',
  styleUrls: ['./main-pad.component.scss']
})
export class MainPadComponent implements OnInit {
  showCard: boolean = false;

  constructor(private cardService: MainPadService) { }
  ngOnInit() {
    this.cardService.currentCardState.subscribe(show => this.showCard = show);
  }
  closeCard() {
    this.cardService.toggleCard(false);
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

import { Component } from '@angular/core';
import { MainPadService } from './shared/services/main-pad.service';
import { Pad } from './shared/models/pad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notemporary';
  minimizedPadsData: Pad[] = [];
  constructor(private cardService: MainPadService) { }


  openNewTab(): void {
    const currentUrl = window.location.href;
    window.open(currentUrl, '_blank');
  }

  openNewCard() {
    this.cardService.toggleCard(true);
  }

  incominMinimizedData(pad: Pad) {
    this.minimizedPadsData.push(pad);
  }
}

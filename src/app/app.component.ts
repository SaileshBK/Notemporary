import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notemporary';

  openNewTab(): void {

    const currentUrl = window.location.href;
    window.open(currentUrl, '_blank');
  }
}

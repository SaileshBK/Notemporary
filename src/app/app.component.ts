import { Component } from '@angular/core';
import { NotePadService } from './shared/services/note-pad.service';
import { Note } from './shared/models/note';
import { MatDialog } from '@angular/material/dialog';
import { NewNotePadDialogComponent } from './shared/components/new-note-pad-dialog/new-note-pad-dialog.component';
import { SettingsDialogComponent } from './shared/components/settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Notemporary';
  minimizedPadsData: Note[] = [];

  constructor(
    private cardService: NotePadService,
    private dialog: MatDialog
  ) { }

  openNewTab(): void {
    const currentUrl = window.location.href;
    window.open(currentUrl, '_blank');
  }

  openNewCard() {
    const dialogRef = this.dialog.open(NewNotePadDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cardService.createNewNotePad(result);
      }
    });

  }

  incominMinimizedData(pad: Note) {
    if (pad.isRemoved) {
      this.minimizedPadsData = this.minimizedPadsData.filter(x => x.id != pad.id);
      return;
    }

    if (this.minimizedPadsData.find(x => x.id == pad.id)) {
      return;
    }
    this.minimizedPadsData.push(pad);
  }

  openMinimizedCard(pad: Note) {
    this.cardService.sendMinimizedData(pad);
  }

  openSettings() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }
}

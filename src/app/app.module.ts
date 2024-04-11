import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotePadComponent } from './editor/note-pad/note-pad.component';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from './shared/directives/draggable.directive';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { NewNotePadDialogComponent } from './shared/components/new-note-pad-dialog/new-note-pad-dialog.component';
import { SettingsDialogComponent } from './shared/components/settings-dialog/settings-dialog.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    NotePadComponent,
    DraggableDirective,
    NewNotePadDialogComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatDialogContent,
    MatDialogActions,
    DragDropModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

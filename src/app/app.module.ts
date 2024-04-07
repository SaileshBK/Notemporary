import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPadComponent } from './editor/main-pad/main-pad.component';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from './shared/directives/draggable.directive';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogActions, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { NewPadDialogComponent } from './shared/components/new-pad-dialog/new-pad-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPadComponent,
    DraggableDirective,
    NewPadDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatDialogContent,
    MatDialogActions,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

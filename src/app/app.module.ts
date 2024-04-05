import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPadComponent } from './editor/main-pad/main-pad.component';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from './shared/directives/draggable.directive';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    MainPadComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPadComponent } from './editor/main-pad/main-pad.component';
import { FormsModule } from '@angular/forms';
import { DraggableDirective } from './shared/directives/draggable.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPadComponent,
    DraggableDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

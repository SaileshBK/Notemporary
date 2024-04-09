import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NotePadService {
  minimizedData$ = new BehaviorSubject<Partial<Note>>({});
  createNewCardPad$ = new BehaviorSubject<Partial<Note>>({});

  createNewNotePad(createNew: Note) {
    this.createNewCardPad$.next(createNew);
  }

  sendMinimizedData(note: Note) {
    this.minimizedData$.next(note);
  }
}

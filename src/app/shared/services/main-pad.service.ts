import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Pad } from '../models/pad';

@Injectable({
  providedIn: 'root'
})
export class MainPadService {
  minimizedData$ = new BehaviorSubject<Partial<Pad>>({});
  createNewCardPad$ = new BehaviorSubject<Partial<Pad>>({});

  createNewPad(createNew: Pad) {
    this.createNewCardPad$.next(createNew);
  }

  sendMinimizedData(pad: Pad) {
    this.minimizedData$.next(pad);
  }
}

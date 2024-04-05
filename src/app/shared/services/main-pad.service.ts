import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Pad } from '../models/pad';

@Injectable({
  providedIn: 'root'
})
export class MainPadService {
  minimizedData$ = new BehaviorSubject<Pad | null>(null);
  private showCardSource = new BehaviorSubject<boolean>(false);
  currentCardState = this.showCardSource.asObservable();

  toggleCard(show: boolean) {
    this.showCardSource.next(show);
  }

  sendMinimizedData(pad: Pad) {
    this.minimizedData$.next(pad);
  }
}

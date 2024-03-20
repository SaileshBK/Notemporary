import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MainPadService {
  private showCardSource = new BehaviorSubject<boolean>(false);
  currentCardState = this.showCardSource.asObservable();

  constructor() { }

  toggleCard(show: boolean) {
    this.showCardSource.next(show);
  }
}

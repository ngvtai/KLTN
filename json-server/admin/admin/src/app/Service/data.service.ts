import { Injectable } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root',
    }
)
export class DataServices {
  private messageSource = new BehaviorSubject('login');
  currentMessage = this.messageSource.asObservable();
  constructor() {  
  }
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}


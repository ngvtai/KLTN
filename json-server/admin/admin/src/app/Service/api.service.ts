import { Injectable } from '@angular/core';
import { number } from 'echarts';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class Datatalbemu{
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();
  private messageSourceID = new BehaviorSubject(0);
  currentMessageID = this.messageSourceID.asObservable();
  private messageSourceSYS = new BehaviorSubject(false);
  currentMessageSYS = this.messageSourceSYS.asObservable();
  private messageSourceSYSID = new BehaviorSubject("");
  currentMessageSYSID = this.messageSourceSYSID.asObservable();
  constructor() {  
  }
 changeMessageSYS(message: boolean) {
    this.messageSourceSYS.next(message);
  }
  changeMessageSYSID(message: string) {
    this.messageSourceSYSID.next(message);
  }
  changeMessage(message: boolean) {
    this.messageSource.next(message);
  }
  changeMessageID(message: number) {
    this.messageSourceID.next(message);
  }
  
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  subject = new Subject();
  reset=false
  
  constructor() { }

  resetAll(resetCart){
    this.reset = resetCart
  }

  resetCart(){
    return this.reset;
  }

  sendMsg(product) {
    console.log(product);
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }

}
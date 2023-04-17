import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  deletedproduct
  reset=false
  
  constructor() { }

  resetAll(resetCart){
    this.reset=resetCart
  }

  resetCart(){
    return this.reset;
  }

  sendMsg(product) {
    console.log(product)
    this.subject.next(product)
    // this.subject.next(
    //   this.subject.getValue().filter(song => (song.id !== id))
  }

  getMsg() {
    return this.subject.asObservable()
  }

  deleteProduct(product){
    this.deletedproduct = product;  
  }
  
  getDeletedMsg() {
    return this.deletedproduct;  
  }

}
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs'
import { CartItem } from '../models/cart.model'; 
import { ShoppingItem } from '../models/shoppingItem.model'; 

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
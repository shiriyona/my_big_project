import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs'
import { CartItem } from '../shopping-list/models/cart.model'; 
import { ShoppingItem } from '../shopping-list/models/shoppingItem.model'; 

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  private allProducts = [];
  productNumber: number;
  cartTotal= 4;
  
  constructor() { }

  sendMsg(product) {
    console.log(product)
    this.subject.next(product)
  }

  getMsg() {
    return this.subject.asObservable()
  }

  onPayment(products){
    this.allProducts = products;
   console.log(this.allProducts)
  }

  onProductNumberPayment(productNumber){
    this.productNumber = productNumber
  }

  onSumPayment(cartTotal):void{
    this.cartTotal = cartTotal;
  }

  onPaymentPage(){
    return this.allProducts;
  }
  onProductNumberPaymentPage():number{
    return this.productNumber
  }

  onSumPaymentPage():number{
    return this.cartTotal
  }

  deleteMsg(product){
    // console.log(product)
    
    // this.subject.next(product.splice())
    
   
    // this.subject.error(product)
    //   delete [this.subject.indexOf(product)];
  //  this.subject.splice(product);  
    // this.deleteItem(product)
    // console.log(product.splice());
  }
}
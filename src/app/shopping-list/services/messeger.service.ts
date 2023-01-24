import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs'
import { CartItem } from '../models/cart.model'; 
import { ShoppingItem } from '../models/shoppingItem.model'; 

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  private allProducts: ShoppingItem[];
  productNumber: number;
  cartTotal: number;
  
  constructor() { }

  sendMsg(product) {
    console.log(product)
    this.subject.next(product)
  }

  getMsg() {
    return this.subject.asObservable()
  }

  onPayment(products): CartItem[]{
    // return this.products.slice();
    this.allProducts=products;
  //  this.allProducts.push(products);
  //  console.log()
   return this.allProducts;
  }

  onProductNumberPayment(productNumber){
    this.productNumber=productNumber
  }

  onSumPayment(cartTotal):void{
    this.cartTotal=cartTotal;
  }

  onPaymentPage():CartItem[]{
    return this.allProducts;
  
  }
  onProductNumberPaymentPage():number{
    return this.productNumber
  }

  onSumPaymentPage():number{
    return this.cartTotal
  }

  deleteMsg(product){
    console.log(product)
    
    this.subject.next(product.splice())
    
   
    // this.subject.error(product)
    //   delete [this.subject.indexOf(product)];
  //  this.subject.splice(product);  
    // this.deleteItem(product)
    // console.log(product.splice());
  }
}
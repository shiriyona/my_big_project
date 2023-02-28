import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartItem } from '../models/cart.model';
import { Ingredient } from '../models/ingredient.model'; 
import { ShoppingItem } from '../models/shoppingItem.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  deletedproduct
  private allProducts;
  productNumber = 0;
  cartTotal= 0;

  constructor() { }

  onPaymentItems(products){
    this.allProducts = products;
  }


  onPaymentNumber(productNumber){
     this.productNumber = productNumber
   }
 
   onPymentSum(cartTotal):void{
     this.cartTotal=cartTotal;
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
}
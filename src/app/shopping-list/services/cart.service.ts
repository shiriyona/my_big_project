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
  private allProducts: ShoppingItem[];
  productNumber: number;
  cartTotal= 4;

  // constructor(private http: HttpClient) { }


   onProductNumberPayment(productNumber){
     this.productNumber = productNumber
   }
 
   onSumPayment(cartTotal):void{
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
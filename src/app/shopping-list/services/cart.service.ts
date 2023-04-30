import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {  
  allProducts: CartItem[] = [];
  productNumber = 0;
  totalSum = 0;

  constructor() { }

  onPaymentItems(products): void {
    this.allProducts = products;
  }

  onPaymentNumber(productNumber): void{
    this.productNumber = productNumber;
  }

  onPaymentSum(sum): void {
    this.totalSum = sum;
  }

  onPaymentPage() {
    return this.allProducts;

  }
  onProductNumberPaymentPage(): number {
    return this.productNumber
  }

  onSumPaymentPage(): number {
    return this.totalSum;
  }
  
}
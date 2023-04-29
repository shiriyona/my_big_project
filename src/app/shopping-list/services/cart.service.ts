import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {  
  private allProducts;
  deletedproduct
  productNumber = 0;
  cartTotal = 0;

  constructor() { }

  onPaymentItems(products) {
    this.allProducts = products;
  }

  onPaymentNumber(productNumber) {
    this.productNumber = productNumber
  }

  onPaymentSum(cartTotal): void {
    this.cartTotal = cartTotal;
  }

  onPaymentPage() {
    return this.allProducts;

  }
  onProductNumberPaymentPage(): number {
    return this.productNumber
  }

  onSumPaymentPage(): number {
    return this.cartTotal;
  }
  
}
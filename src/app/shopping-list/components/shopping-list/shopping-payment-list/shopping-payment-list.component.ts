import { Component, Input, OnInit } from '@angular/core';
import { ShoppingItem } from '../../../models/shoppingItem.model';
import { Location } from '@angular/common'
import { CartService } from '../../../services/cart.service';
import { CartItem } from 'src/app/shopping-list/models/cart.model';


@Component({
  selector: 'app-shopping-payment-list',
  templateUrl: './shopping-payment-list.component.html',
  styleUrls: ['./shopping-payment-list.component.css']
})
export class ShoppingPaymentListComponent implements OnInit {
  cartItems: CartItem[];
  items = []
  cartTotal = 0;
  productNumber = 0;

  constructor(private cartService: CartService, private location: Location) { }

  ngOnInit() {
    this.getProducts();
  }

  printThisPage(id) {
    var printContents = document.getElementById(id).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.close();
    document.close();
  }

  getProducts() {
    this.cartItems = this.cartService.onPaymentPage()
    this.productNumber = this.cartService.onProductNumberPaymentPage()
    this.cartTotal = this.cartService.onSumPaymentPage()
  }

  deleteProduct(deletedproduct){
    for (let i =  this.cartItems.length - 1; i >= 0; i--) {
      if (this.cartItems[i].productId === deletedproduct.productId) {
        if(this.cartItems[i].qty===1) {
          this.cartItems.splice(i, 1);
          this.productNumber--;
        }
        else {
          deletedproduct.qty =  deletedproduct.qty - 1;
          this.productNumber--;
        }        
      }
    } 
  }

  printThisPage1(id) {
    var printContents = document.getElementById(id).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.focus();
    window.print();
    document.body.innerHTML = originalContents;
    window.close();
  }

  back(): void {
    this.location.back()
  }

}


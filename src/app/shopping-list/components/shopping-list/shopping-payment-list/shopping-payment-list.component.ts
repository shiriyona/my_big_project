import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-shopping-payment-list',
  templateUrl: './shopping-payment-list.component.html',
  styleUrls: ['./shopping-payment-list.component.css']
})
export class ShoppingPaymentListComponent implements OnInit {
  cartItems = [];
  items = []
  totalSum = 0;
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
    this.totalSum = this.cartService.onSumPaymentPage()
  }

  deleteProduct(deletedproduct){
    for (let i =  this.cartItems.length - 1; i >= 0; i--) {
      if (this.cartItems[i].productId === deletedproduct.productId) {
        if(this.cartItems[i].qty===1) {
          this.cartItems.splice(i, 1);
          this.productNumber--;
          this.totalSum = this.totalSum - deletedproduct.price;
        }
        else {
          deletedproduct.qty =  deletedproduct.qty - 1;
          this.productNumber--;
          this.totalSum = this.totalSum - deletedproduct.price;
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


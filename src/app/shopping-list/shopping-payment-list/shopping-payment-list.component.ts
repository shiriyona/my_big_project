import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../models/cart.model'; 
import { ShoppingItem } from '../models/shoppingItem.model'; 
import { MessengerService } from '../../shopping-services/messeger.service';
import { Router } from '@angular/router'
import { Location } from '@angular/common'



@Component({
  selector: 'app-shopping-payment-list',
  templateUrl: './shopping-payment-list.component.html',
  styleUrls: ['./shopping-payment-list.component.css']
})
export class ShoppingPaymentListComponent implements OnInit {
  cartItems: ShoppingItem[];
  items=[]

  cartTotal = 0;
  productNumber = 0;

  constructor(
    private msg: MessengerService, private location: Location
  ) { }

  ngOnInit() {
    // this.msg.getMsg().subscribe((product: CartItem) => {
    //   this.addProductToCart(product)   
    // });
    this.getProducts();
  }

  printThisPage(id){
    var printContents = document.getElementById(id).innerHTML;
	  var originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.close();
    document.close();
  }

  getProducts(){
    this.cartItems = this.msg.onPaymentPage()
    this.productNumber  = this.msg.onProductNumberPaymentPage()
    this.cartTotal = this.msg.onSumPaymentPage()
  }

  printThisPage1(id){
    var printContents = document.getElementById(id).innerHTML;
		var originalContents = document.body.innerHTML;
		document.body.innerHTML = printContents;
    // window.onafterprint = window.close; 
    window.focus();
    window.print();
    // window.close();
    document.body.innerHTML = originalContents;
    window.close();
  }

  back(): void {
    this.location.back()
  }

}


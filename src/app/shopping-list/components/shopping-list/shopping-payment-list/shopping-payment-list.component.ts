import { Component, Input, OnInit } from '@angular/core';
import { ShoppingItem } from '../../../models/shoppingItem.model';
import { MessengerService } from '../../../services/messeger.service';
import { Location } from '@angular/common'
import { CartService } from '../../../services/cart.service';


@Component({
  selector: 'app-shopping-payment-list',
  templateUrl: './shopping-payment-list.component.html',
  styleUrls: ['./shopping-payment-list.component.css']
})
export class ShoppingPaymentListComponent implements OnInit {
  cartItems: ShoppingItem[];
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


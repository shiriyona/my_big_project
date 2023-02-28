import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkOutForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    flowerName: new FormControl('', [Validators.required])
  })

  cartItems
  productNumber
  cartTotal

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.cartItems = this.cartService.onPaymentPage()
    this.productNumber  = this.cartService.onProductNumberPaymentPage()
    this.cartTotal = this.cartService.onSumPaymentPage()
  }

}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  checkOutForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    // zip: new FormControl('', [Validators.required]),
    // nameOnCard: new FormControl('', [Validators.required]),
    // cardNumber: new FormControl('', [Validators.required]),
    // expMonth: new FormControl('', [Validators.required]),
    // expYear: new FormControl('', [Validators.required]),
    // cvv: new FormControl('', [Validators.required]),
    // signPad: new FormControl('', [Validators.required]),
  })

  cartItems
  productNumber
  cartTotal

  constructor(private cartService: CartService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.cartItems = this.cartService.onPaymentPage()
    this.productNumber  = this.cartService.onProductNumberPaymentPage()
    this.cartTotal = this.cartService.onSumPaymentPage()
  }

  openDialog() {
    const dialogRef = this.dialog.open(CheckOutDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'check-out-dialog',
  templateUrl: 'check-out-dialog.html',
})
export class CheckOutDialog {}



import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  trigger, state, style, animate, transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shopping-list/services/cart.service';
import { MessengerService } from 'src/app/shared/services/messeger.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class CheckoutComponent implements OnInit {
  checkOutForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip: new FormControl('', []),
    nameOnCard: new FormControl('', [Validators.required]),
    cardNumber: new FormControl('', [Validators.required]),
    expMonth: new FormControl('', [Validators.required]),
    expYear: new FormControl('', [Validators.required]),
    cvv: new FormControl('', [Validators.required]),
    // signPad: new FormControl('', [Validators.required]),
  })

  checkOutFormFull = false
  cartItems
  productNumber
  cartTotal
  cart = false
  resetCart = false

  constructor(private cartService: CartService, public dialog: MatDialog, private router: Router, private msg: MessengerService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.cartItems = this.cartService.onPaymentPage()
    this.productNumber = this.cartService.onProductNumberPaymentPage()
    this.cartTotal = this.cartService.onSumPaymentPage()
  }

  openCart() {
    if (this.cart === false) {
      this.cart = true
    }
    else if (this.cart === true) {
      this.cart = false
    }
  }

  getErrorMessage() {
    console.warn(this.checkOutForm.value);
    console.log(this.checkOutForm);
    if (this.checkOutForm.invalid) {
      return 'You must enter a value';
    }
    else {
      this.checkOutFormFull = true
    }
    return this.checkOutForm.hasError('email') ? 'Not a valid email' : '';
  }

  onCheckOut() {
    console.warn(this.checkOutForm.value);
    console.log(this.checkOutForm);
    this.checkOutForm.reset();
  }

  openDialog() {
    if (this.checkOutFormFull === false) {
      this.resetCart = true
      this.msg.resetAll(this.resetCart);
      this.router.navigate(['/shopping-list'])
      const dialogRef = this.dialog.open(CheckOutDialog);

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }
}

@Component({
  selector: 'check-out-dialog',
  templateUrl: 'check-out-dialog.html',
  styleUrls: ['./checkout-dialog.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class CheckOutDialog {
  show = false;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
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

}



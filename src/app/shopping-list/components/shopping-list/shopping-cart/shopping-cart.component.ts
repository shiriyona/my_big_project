import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CartItem } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';
import { MessengerService } from '../../../../shared/services/messeger.service';
import { ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('svg', { read: ElementRef }) public svg: any;
  @ViewChild('wrapper', { read: ElementRef }) public wrapper: any;
  @Input() cartItems = [];
  @Input() productItems;
  private clickSubscription: Subscription;
  items: number = 0;
  resetCart = false
  totalSum = 0;
  productNumber = 0;
  x

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: CartItem) => {
      this.addProductToCart(product)
    });
    this.resetAll(this.msg.resetCart())
  }

  addProductToCart(product: CartItem) {
    let productEixst = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productEixst = true;
        this.productNumber++
        break;
      }
    }
    if (!productEixst) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }

    this.productNumber = 0;
    this.totalSum = 0;
    this.cartItems.forEach(item => {
      this.totalSum += (item.qty * item.price)
      this.productNumber += (item.qty)
    })
  }

  resetAll(reset) {
    if (reset === true) {
      this.cartItems.forEach(c => c.reset()); 
      this.msg.resetAll(this.resetCart)
    }
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

  public ngOnDestroy(): void {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }

  deleteProduct(deletedproduct, event: Event){
    event?.stopPropagation();
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

  onPagmentPage(cartItems) {
    this.cartService.onPaymentItems(cartItems);
    this.cartService.onPaymentNumber(this.productNumber);
    this.cartService.onPaymentSum(this.totalSum);
  }
}



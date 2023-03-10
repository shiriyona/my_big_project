import { Component, Input, IterableDiffers, OnInit, ViewChild } from '@angular/core';
// import { MatMenuTrigger } from '@angular/material';
import { CartItem } from '../models/cart.model'; 
import { Ingredient } from '../models/ingredient.model';
import { CartService } from '../services/cart.service';
import { MessengerService } from '../services/messeger.service';

import {  ElementRef } from '@angular/core';
import { AnimationBuilder, transition, trigger, style, animate, state, keyframes, query, stagger, sequence, group, AnimationMetadata, AnimationPlayer } from '@angular/animations';

// import { Subscription } from 'rxjs/Subscription';
import { throttleTime } from 'rxjs/operators';
import { Subscription, fromEvent } from 'rxjs';
import { ShoppingItem } from '../models/shoppingItem.model'; 
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { fromEvent } from 'rxjs/observable/fromEvent';
// import { badgeAnimation, circleAnimation } from '../animations/animaions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  @ViewChild('svg', { read: ElementRef }) public svg: any;
  @ViewChild('wrapper', { read: ElementRef }) public wrapper: any;

  public items: number = 0;
  private clickSubscription: Subscription;


  @Input() cartItems=[];

  cartTotal = 0;
  productNumber = 0;
  @Input() productItems

  constructor(
    private msg: MessengerService,
    private cartService: CartService, private router: Router, public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: CartItem) => {
      this.addProductToCart(product)   
    });
    this.msg.getDeletedMsg().subscribe((product: CartItem) => {
      this.deleteProductToCart(product)   
    });

  }

  addProductToCart(product: CartItem) {

    let productEixst = false;

    for (let i in this.cartItems) {
      if(this.cartItems[i].productId === product.id){
       this.cartItems[i].qty++
       productEixst = true;
       this.productNumber++
       break;
      }
    }
    if(!productEixst){
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      }) 
    }

  this.productNumber=0;
  this.cartTotal=0;
  this.cartItems.forEach(item=>{
    this.cartTotal += (item.qty* item.price)
    this.productNumber += (item.qty)
  }) 
  }

  deleteProductToCart(product){
  //   let productEixst = false;
  //   for (let i in this.cartItems) {
  //     if(this.cartItems[i].productId === product.id){
  //      this.cartItems[i].qty--
  //      productEixst = true;
  //      this.productNumber--
  //      break;
  //     }
  //   }
  //   if(!productEixst){
  //     this.cartItems.splice(product) 
  //   }

  // this.cartItems.forEach(item=>{
  //   this.cartTotal += (item.qty* item.price)
  //   this.productNumber += (item.qty)
  // }) 
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


  public ngOnDestroy(): void {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }

  onPagmentPage(cartItems) {
    // this.productItems.push(cartItems)
    this.cartService.onPaymentItems(cartItems);
    this.cartService.onPaymentNumber(this.productNumber);
    this.cartService.onPymentSum(this.cartTotal);
  }
}



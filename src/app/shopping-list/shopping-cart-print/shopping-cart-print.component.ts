import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../models/cart.model'; 
import { MessengerService } from '../services/messeger.service';

@Component({
  selector: 'app-shopping-cart-print',
  templateUrl: './shopping-cart-print.component.html',
  styleUrls: ['./shopping-cart-print.component.css']
})
export class ShoppingCartPrintComponent implements OnInit {
  @Input() cartItems;
  productItems;
  items=[]

  cartTotal = 0;
  productNumber = 0;

  constructor(
    private msg: MessengerService
  ) { }

  ngOnInit() {
    // this.msg.getMsg().subscribe((product: CartItem) => {
    //   this.addProductToCart(product)   
    // });
    this.getProducts();
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
  }

}

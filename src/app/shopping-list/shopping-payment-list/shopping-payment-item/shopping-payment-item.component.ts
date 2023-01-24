import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart.model'; 

@Component({
  selector: 'app-shopping-payment-item',
  templateUrl: './shopping-payment-item.component.html',
  styleUrls: ['./shopping-payment-item.component.css']
})
export class ShoppingPaymentItemComponent implements OnInit {
  @Input() cartItem;

  constructor() { }

  ngOnInit(): void {
  }

}

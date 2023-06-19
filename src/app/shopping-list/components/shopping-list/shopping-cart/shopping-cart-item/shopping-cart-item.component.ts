import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shopping-list/services/cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartItem;

  constructor() { }

  ngOnInit(): void {
  }


}

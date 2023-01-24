import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart.model'; 
import { Ingredient } from '../../models/ingredient.model';
import { MessengerService } from '../../services/messeger.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() cartItem;

  constructor( private msg: MessengerService) { }

  ngOnInit(): void {
  }

  deleteItem() {
    this.msg.deleteMsg(this.cartItem);
    
    // delete [this.data.indexOf(msg)];
    // this.deleteItem(msg)
    // this.msg.deleteMsg(msg);
  }

}

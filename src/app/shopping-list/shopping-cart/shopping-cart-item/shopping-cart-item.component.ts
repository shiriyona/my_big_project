import { Component, Input, OnInit } from '@angular/core';
import { ShoppingItem } from '../../models/shoppingItem.model';
import { MessengerService } from '../../../shopping-services/messeger.service';

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

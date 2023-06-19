import { Component, Input, OnInit } from '@angular/core';
import { ShoppingItem } from '../../../models/shoppingItem.model';
import { MessengerService } from '../../../../shared/services/messeger.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  @Input() productItem: ShoppingItem;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }

}

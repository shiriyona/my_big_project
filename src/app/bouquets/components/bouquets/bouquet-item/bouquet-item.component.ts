import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/shared/services/messeger.service';
import { ShoppingItem } from 'src/app/shopping-list/models/shoppingItem.model';

@Component({
  selector: 'app-bouquet-item',
  templateUrl: './bouquet-item.component.html',
  styleUrls: ['./bouquet-item.component.css']
})
export class BouquetItemComponent implements OnInit {
  @Input() productItem: ShoppingItem

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(productItem) {
    this.msg.sendMsg(productItem);
  }

}

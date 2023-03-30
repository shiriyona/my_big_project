import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from '../../../../services/messeger.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() cartItem;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  onMinus() {
    this.msg.deleteProduct(this.cartItem);
  }

}

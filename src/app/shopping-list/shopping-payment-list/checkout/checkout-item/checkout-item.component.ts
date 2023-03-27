import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/shopping-list/services/messeger.service';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.css']
})
export class CheckoutItemComponent implements OnInit {
  @Input() cartItem
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Order } from 'src/app/orders/models/order.model';
import { OrdersService } from 'src/app/orders/services/orders.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  @ViewChild('orderCodeInput') orderCodeInputRef: ElementRef;
  @ViewChild('orderNameInput') orderNameInputRef: ElementRef;
  @ViewChild('dateInvitationInput') dateInvitationInputRef: ElementRef;
  @ViewChild('dateArrivalInput') dateArrivalInputRef: ElementRef;
  @ViewChild('totalInput') totalInputRef: ElementRef;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  addOrder() {
    const orderCode = this.orderCodeInputRef.nativeElement.value;
    const oredrName = this.orderNameInputRef.nativeElement.value;
    const dateInvitation = this.dateInvitationInputRef.nativeElement.value;
    const dateArrival = this.dateArrivalInputRef.nativeElement.value;
    const total = this.totalInputRef.nativeElement.value;
    const newOrder = new Order(orderCode, oredrName, dateInvitation, dateArrival, total);
    this.ordersService.sendOrder(newOrder);
  }

}

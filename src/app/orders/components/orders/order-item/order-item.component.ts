import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/orders/models/order.model';
import { OrdersService } from 'src/app/orders/services/orders.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() order: Order;
  open: boolean = false;
  clickedRow: Order;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
  }

  deleteOrder(order){
    this.ordersService.sendDeletedOrder(order)
  }

  openRow(order) {
    this.open = true;
    this.clickedRow = order;
  }

}

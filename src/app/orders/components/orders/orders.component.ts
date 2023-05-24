import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Order } from '../../models/order.model';
import { Subscription } from 'rxjs';
import { OrdersService } from '../../services/orders.service';
import { MatDialog } from '@angular/material/dialog';
import { AddOrderComponent } from './add-order/add-order.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  getOrderssSubscrition: Subscription;
  open: boolean = false;
  clickedRow: Order;

  @ViewChild('orderCodeInput') orderCodeInputRef: ElementRef;
  @ViewChild('orderNameInput') orderNameInputRef: ElementRef;
  @ViewChild('dateInvitationInput') dateInvitationInputRef: ElementRef;
  @ViewChild('dateArrivalInput') dateArrivalInputRef: ElementRef;
  @ViewChild('totalInput') totalInputRef: ElementRef;

  constructor(private ordersService: OrdersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getOrders();
    this.ordersService.getOrder().subscribe((order: Order) => {
      this.addOrder(order)
    });
    this.ordersService.getDeletedOrder().subscribe((order: Order) => {
      this.deleteOrder(order)
    });
  }

  getOrders() {
    this.getOrderssSubscrition = this.ordersService.getOrders().subscribe(res => {
      this.orders = res;
    });
  }

  ngOnDestroy(): void {
    this.getOrderssSubscrition.unsubscribe();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddOrderComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addOrder(order: Order) {
    this.orders.push(order);
  }

  deleteOrder(order: Order) {
    for (let i = this.orders.length - 1; i >= 0; i--) {
      if (this.orders[i].orderCode === order.orderCode) {
        this.orders.splice(i, 1);
        break;
      }
    }
  }

  editRow(row) {
    row.isOpen = !row.isOpen;
  }

  saveChanges(order) {
    const orderCode = this.orderCodeInputRef.nativeElement.value;
    const oredrName = this.orderNameInputRef.nativeElement.value;
    const dateInvitation = this.dateInvitationInputRef.nativeElement.value;
    const dateArrival = this.dateArrivalInputRef.nativeElement.value;
    const total = this.totalInputRef.nativeElement.value;
    const changeOrder = new Order(orderCode, oredrName, dateInvitation, dateArrival, total);
    for (let i = this.orders.length - 1; i >= 0; i--) {
      if (this.orders[i].orderCode === order.orderCode) {
        this.orders[i] = changeOrder ;
        break;
      }
    }
  }

}

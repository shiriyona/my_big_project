import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Order } from '../models/order.model';
import { ORDERS_MOCK_DATA } from '../constants/order.mock';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  orders: Order[] = [];
  subject = new Subject();
  subject2 = new Subject();

  constructor() {
  }

  onInit() { }

  getOrders(): Observable<Order[]>{
    this.orders = ORDERS_MOCK_DATA;
    return of(this.orders);
  } 
  
  sendOrder(order: Order){
    this.subject.next(order);
  }

  getOrder() {
    return this.subject.asObservable();
  }

  sendDeletedOrder(order: Order){
    this.subject2.next(order);
  }

  getDeletedOrder() {
    return this.subject2.asObservable();
  }

}
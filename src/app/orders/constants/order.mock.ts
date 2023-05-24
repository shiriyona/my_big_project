import { Order } from "src/app/orders/models/order.model";
import { v4 as uuidv4 } from 'uuid';


export const ORDERS_MOCK_DATA: Order[] = [
  {
    orderCode: uuidv4(),
    orderName: 'bamba',
    dateInvitation: '2',
    dateArrival: '3',
    total: 4
  },
  {
    orderCode: uuidv4(),
    orderName: 'chocolate',
    dateInvitation: '',
    dateArrival: '',
    total: 13
  },
  {
    orderCode: uuidv4(),
    orderName: 'pasta',
    dateInvitation: 'd',
    dateArrival: '',
    total: 22
  },
  {
    orderCode: uuidv4(),
    orderName: 'pizza',
    dateInvitation: 'd',
    dateArrival: '',
    total: 22
  },
  {
    orderCode: uuidv4(),
    orderName: 'sushi',
    dateInvitation: 'd',
    dateArrival: '',
    total: 22
  },
];


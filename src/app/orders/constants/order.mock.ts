import { Order } from "src/app/orders/models/order.model";
import { v4 as uuidv4 } from 'uuid';


export const ORDERS_MOCK_DATA: Order[] = [
  {
    orderCode: uuidv4(),
    orderName: 'bamba',
    dateInvitation: '2/2/23',
    dateArrival: '3/3/23',
    total: 4
  },
  {
    orderCode: uuidv4(),
    orderName: 'chocolate',
    dateInvitation: '1/2/23',
    dateArrival: '23/2/23',
    total: 13
  },
  {
    orderCode: uuidv4(),
    orderName: 'pasta',
    dateInvitation: '1/1/23',
    dateArrival: '7/1/23',
    total: 22
  },
  {
    orderCode: uuidv4(),
    orderName: 'pizza',
    dateInvitation: '5/4/23',
    dateArrival: '1/5/23',
    total: 22
  },
  {
    orderCode: uuidv4(),
    orderName: 'sushi',
    dateInvitation: '2/6/23',
    dateArrival: '22/6/23',
    total: 22
  },
];


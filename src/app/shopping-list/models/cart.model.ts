import { Ingredient } from './ingredient.model';
import { ShoppingItem } from './shoppingItem.model';

export class CartItem {
  // id: number;
  id: number;
  name: string;
  price: number;  
  qty: number;
  img: string

  constructor(product: ShoppingItem, qty = 1, img: string) {
    // this.id = id;
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.qty = qty;
    this.img = product.img;

  }
}
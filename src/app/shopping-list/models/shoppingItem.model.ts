export class ShoppingItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;

  constructor(id: number, name: string, price: number, img: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img
  }

}
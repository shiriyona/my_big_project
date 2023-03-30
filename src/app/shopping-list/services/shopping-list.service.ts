import { Ingredient } from '../models/ingredient.model';
import { Ingredient as firstIngredient } from '../models/ingredient.model'; 
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingItem } from '../models/shoppingItem.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingItemsChanged = new EventEmitter<ShoppingItem[]>();
  public amount=0;
  deletedproduct
 
  private shoppingItems: ShoppingItem[] = [
    new ShoppingItem(1, 'vinca', 2, '../../../../assets/img/my-vinca-flower.jpg'),
    new ShoppingItem(2, 'tagetes', 1, '../../../../assets/img/my-tagetes-flower.jpg'),
    new ShoppingItem(3, 'petunia', 2,'../../../../assets/img/my-petunia-flower.jpg'),
    new ShoppingItem(4, 'portulca', 2, '../../../../assets/img/my-portulca-flower.jpg'),
    new ShoppingItem(5, 'celosia', 4, '../../../../assets/img/my-celosia-flower.jpg'),
    new ShoppingItem(6, 'cynicism', 3, '../../../../assets/img/my-cynicism-flower.jpg'),
    new ShoppingItem(7, 'viola tricolor', 1, '../../../../assets/img/my-viola-tricolor-flower.jpg'),
    new ShoppingItem(8, 'antirrhinum', 1, '../../../../assets/img/my-antirrhinum-flower.jpg'),
    new ShoppingItem(9, 'lobularia maritimam', 5, '../../../../assets/img/my-lobularia-maritimam-flower.jpg'),
    new ShoppingItem(10, 'cyclamen', 4, '../../../../assets/img/my-cyclamen-flower.jpg'),
    new ShoppingItem(11, 'tropaeolum majus', 2, '../../../../assets/img/my-tropaeolum-majus-flower.jpg'),
    new ShoppingItem(12, 'geranium', 1, '../../../../assets/img/my-geranium-flower.jpg'),
    new ShoppingItem(13, 'impatiens', 2,'../../../../assets/img/my-impatiens-flower.jpg'),
    new ShoppingItem(14, 'pentas', 2, '../../../../assets/img/my-pentas-flower.jpg'),
    new ShoppingItem(15, 'kalanchoe', 4, '../../../../assets/img/my-kalanchoe-flower.jpg'),
    new ShoppingItem(16, 'dianthus chinensis', 3, '../../../../assets/img/my-dianthus-chinensis-flower.jpg'),
  ];


  getIngredients():Observable<any> {
    return  of(this.shoppingItems.slice());
  }

  addIngredient(ShoppingItem: ShoppingItem) {
    this.shoppingItems.push(ShoppingItem);
    this.shoppingItemsChanged.emit(this.shoppingItems.slice());
  }

  addIngredients(items: ShoppingItem[]) {
    this.shoppingItems.push(...items);
    this.shoppingItemsChanged.emit(this.shoppingItems.slice());
  }

  onAddItem() {
    for (let item of this.shoppingItems) {
      this.addIngredient(item);
    }
    this.shoppingItems.push(...this.shoppingItems);
    this.shoppingItemsChanged.emit(this.shoppingItems.slice());
  }




  onPlusItem(item: ShoppingItem) {
    this.shoppingItems.push(firstIngredient[this.amount++])
    this.shoppingItems.push(item);
    this.shoppingItemsChanged.emit(this.shoppingItems.slice());

  }

}

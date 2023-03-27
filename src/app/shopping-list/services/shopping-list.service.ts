import { Ingredient } from '../models/ingredient.model';
import { Ingredient as firstIngredient } from '../models/ingredient.model'; 
import { Ingredient as secondIngredient } from '../models/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingItem } from '../models/shoppingItem.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<ShoppingItem[]>();
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
    // new ShoppingItem(17, 'Olives', 1, 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg'),
    // new ShoppingItem(18, 'garlic', 1, 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg'),
    // new ShoppingItem(19, 'pineapple', 5, 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg'),
    // new ShoppingItem(20, 'Strawberry', 4, 'https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg')
  ];


  getIngredients():Observable<any> {
    return  of(this.shoppingItems.slice());
  }

  addIngredient(ShoppingItem: ShoppingItem) {
    this.shoppingItems.push(ShoppingItem);
    this.ingredientsChanged.emit(this.shoppingItems.slice());
  }

  addIngredients(ingredients: ShoppingItem[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.shoppingItems.push(...ingredients);
    this.ingredientsChanged.emit(this.shoppingItems.slice());
  }

  onAddItem() {
    for (let ingredient of this.shoppingItems) {
      this.addIngredient(ingredient);
    }
    this.shoppingItems.push(...this.shoppingItems);
    this.ingredientsChanged.emit(this.shoppingItems.slice());
  }




  onPlusItem(ingredient: ShoppingItem) {
    this.shoppingItems.push(firstIngredient[this.amount++])
    this.shoppingItems.push(ingredient);
    this.ingredientsChanged.emit(this.shoppingItems.slice());

  }

  onMinusItem(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);
    // for (let ingredient of this.ingredients) {
    //   this.addIngredient(ingredient);
    // }
    // this.ingredients.push(...this.ingredients);
    this.amount=this.amount+1;
    // this.ingredientsChanged.emit(this.amount++);
  }
}

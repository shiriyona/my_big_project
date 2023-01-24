
import { EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Users } from '../models/users.model';

export class UsersService {
  userclicked = false;
  userDetails :Users[];
 
  private user: Users[] = [
    new Users('Giovanni', 'Anders', 1, 'US', 'New York', 30),
    new Users('Maria', 'Francisco', 2, 'Australia', 'Sydney', 39),
    new Users('Handel', 'Mence', 3, 'US', 'San Francisco',49),
    new Users('Ellie', 'Bennett', 4, 'UK', 'Bristol', 59),
    new Users('Ben', 'Dolin', 5, 'US', 'Boston', 23),
    new Users('Shon', 'Rovelli', 6, 'Uk', 'Edinburgh', 28),
  ];



  getUsers():Observable<any> {
    return  of(this.user.slice());
  }

  getClickedUserDetails(user){
    this.userclicked = true;
    // var userDetails = Object.keys(user).map(key => ({type: key, value: user[key]}));
    // console.log(userDetails);
    return user; 
  }

  getIfClickedUser(userclicked) {
    this.userclicked = userclicked;
    return userclicked;
  }

  onIfClickedUser() {
    return this.userclicked;
  }

  onUserDetails() {
    return this.userDetails;
  }

  // addIngredient(ShoppingItem: ShoppingItem) {
  //   this.shoppingItems.push(ShoppingItem);
  //   this.ingredientsChanged.emit(this.shoppingItems.slice());
  // }

  // addIngredients(ingredients: ShoppingItem[]) {
  //   // for (let ingredient of ingredients) {
  //   //   this.addIngredient(ingredient);
  //   // }
  //   this.shoppingItems.push(...ingredients);
  //   this.ingredientsChanged.emit(this.shoppingItems.slice());
  // }

  // onAddItem() {
  //   for (let ingredient of this.shoppingItems) {
  //     this.addIngredient(ingredient);
  //   }
  //   this.shoppingItems.push(...this.shoppingItems);
  //   this.ingredientsChanged.emit(this.shoppingItems.slice());
  // }




  // onPlusItem(ingredient: ShoppingItem) {
  //   this.shoppingItems.push(firstIngredient[this.amount++])
  //   this.shoppingItems.push(ingredient);
  //   this.ingredientsChanged.emit(this.shoppingItems.slice());
  // }
}

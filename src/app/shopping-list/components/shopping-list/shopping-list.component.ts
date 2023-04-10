import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { MessengerService } from '../../services/messeger.service';
import { ShoppingListService } from '../../services/shopping-list.service';

export class item {
  name: string;
}
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Input() productItems;  
  @Input() ingredients;
  printClick: boolean = false;
  numberOfTicks: number = 0;
  sum = 0;
  cartItems: item[] = []
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20]

  constructor(private msg: MessengerService, private slService: ShoppingListService, private sdv: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      this.sdv.markForCheck();
    }, 1000);
  }

  ngOnInit() {
    this.postList();
    this.slService.shoppingItemsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
          this.sdv.markForCheck;
        }
      );
  }

  postList() {
    this.slService.getShoppingItems().subscribe((response) => {
      this.ingredients = response;
      console.log(this.ingredients);
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.postList();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.postList();
  }

  handleAddToCart(product: Ingredient) {
    this.msg.sendMsg(product);
  }

}

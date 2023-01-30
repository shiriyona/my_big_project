import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import  { MatMenuModule } from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';


import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { ShoppingPaymentListComponent } from './shopping-payment-list/shopping-payment-list.component';
import { ShoppingPaymentItemComponent } from './shopping-payment-list/shopping-payment-item/shopping-payment-item.component';
import { ShoppingCartPrintComponent } from './shopping-cart-print/shopping-cart-print.component';
import { ShoppingListService } from './services/shopping-list.service';
import { MessengerService } from './services/messeger.service';
import { ShoppingListRoutingModule } from './shoppingList-routing.module';



@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent,   
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingPaymentListComponent,
    ShoppingPaymentItemComponent,
    ShoppingCartPrintComponent


  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    NgxPaginationModule,
    ScrollingModule,
    MatIconModule,
    ShoppingListRoutingModule
  ],
  providers: [ShoppingListService, MessengerService],
  schemas: []
})
export class ShoppingListModule { }
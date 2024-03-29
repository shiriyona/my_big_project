import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { CheckoutItemComponent } from './components/shopping-list/shopping-payment-list/checkout/checkout-item/checkout-item.component';
import { ShoppingCartItemComponent } from './components/shopping-list/shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { ShoppingItemComponent } from './components/shopping-list/shopping-item/shopping-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingCartComponent } from './components/shopping-list/shopping-cart/shopping-cart.component';
import { ShoppingPaymentItemComponent } from './components/shopping-list/shopping-payment-list/shopping-payment-item/shopping-payment-item.component';
import { ShoppingPaymentListComponent } from './components/shopping-list/shopping-payment-list/shopping-payment-list.component';
import { ShoppingListRoutingModule } from './shoppingList-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { SigningPadComponent } from './components/shopping-list/shopping-payment-list/checkout/signing-pad/signing-pad.component';
import { CheckoutComponent, CheckOutDialog } from './components/shopping-list/shopping-payment-list/checkout/checkout.component';


@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingItemComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingPaymentListComponent,
    ShoppingPaymentItemComponent,
    SigningPadComponent,
    CheckoutComponent,
    CheckoutItemComponent,
    CheckOutDialog
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
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    ShoppingListRoutingModule
  ],
  providers: [],
  exports: [ShoppingCartComponent]
})
export class ShoppingListModule { }
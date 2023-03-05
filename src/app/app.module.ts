import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import  { MatMenuModule } from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// import { ShoppingListModule } from './shopping-list/shoppingList.module';
import { ShoppingCartComponent } from './shopping-list/shopping-cart/shopping-cart.component';
import { DrawingModule } from './drawings/drawing.module';
import { MessengerService } from './shopping-list/services/messeger.service';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { ShoppingCartItemComponent } from './shopping-list/shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { ShoppingPaymentListComponent } from './shopping-list/shopping-payment-list/shopping-payment-list.component';
import { ShoppingPaymentItemComponent } from './shopping-list/shopping-payment-list/shopping-payment-item/shopping-payment-item.component';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { ContactsModule } from './contacts/contacts.module';
import { SigningPadComponent } from './shopping-list/shopping-payment-list/checkout/signing-pad/signing-pad.component';
import { CheckoutComponent, CheckOutDialog } from './shopping-list/shopping-payment-list/checkout/checkout.component';
import { CartService } from './shopping-list/services/cart.service';
import { CheckoutItemComponent } from './shopping-list/shopping-payment-list/checkout/checkout-item/checkout-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    ShoppingListComponent,
    ShoppingItemComponent,   
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingPaymentListComponent,
    ShoppingPaymentItemComponent,
    SigningPadComponent  ,
    CheckoutComponent,
    CheckoutItemComponent,
    CheckOutDialog
    
 ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    AppRoutingModule, 
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatFormFieldModule,
    MatMenuModule,
    MatPaginatorModule,
    NgxPaginationModule,
    ScrollingModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    ContactsModule,
    // ShoppingListModule,
    DrawingModule,
  ],
  exports:[ MatTableModule ],
  providers: [ShoppingListService, MessengerService, CartService],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }

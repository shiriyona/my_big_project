import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersModule } from './users/users.module';
import { ShoppingListModule } from './shopping-list/shoppingList.module';
import { ShoppingCartComponent } from './shopping-list/shopping-cart/shopping-cart.component';
import { DrawingModule } from './drawings/drawing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    // ShoppingCartComponent  
 ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
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
    UsersModule,
    ShoppingListModule,
    DrawingModule
  ],
  exports:[ MatTableModule ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA,
     CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrawingModule } from './drawings/drawing.module';
import { ContactsModule } from './contacts/contacts.module';
import { loginModule } from './login/login.module';
import { ShoppingListModule } from './shopping-list/shoppingList.module';
import { EmailssModule } from './emails/emails.module';
import { OnlyLoggedUsersGuard } from './only-logged-user-guard';
import { OrdersModule } from './orders/orders.module';
import { UserssModule } from './users/users.module';
import { UsersRoleGuard } from './user-role-guard';
import { BouquetsModule } from './bouquets/bouquets.module';
import { SyntheticGrassModule } from './synthetic-grass/synthetic-grass-module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
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
    MatButtonToggleModule,
    MatDatepickerModule,
    ContactsModule,
    DrawingModule,
    loginModule,
    ShoppingListModule,
    EmailssModule,
    OrdersModule,
    UserssModule,
    BouquetsModule,
    SyntheticGrassModule
  ],
  exports: [MatTableModule],
  providers: [OnlyLoggedUsersGuard, UsersRoleGuard],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule { }

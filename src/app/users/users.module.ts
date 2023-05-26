import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { UserssRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/users/user-item/user-item.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    ScrollingModule,
    UserssRoutingModule
  ],
  providers: [],
})

export class UserssModule { }

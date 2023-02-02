import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { DialogContentExampleDialog, UsersComponent } from './components/users.component';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    UsersComponent,
    DialogContentExampleDialog
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
    UsersRoutingModule
  ],
  providers: [UsersService],
  schemas: [NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule { }
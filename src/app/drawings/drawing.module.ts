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


import { DrawingsComponent } from './components/drawing/drawings.component';
import { DrawingRoutingModule } from './drawing-routing.module';



@NgModule({
  declarations: [
    DrawingsComponent,
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
    DrawingRoutingModule
  ],
  providers: [],
  schemas: []
})
export class DrawingModule { }
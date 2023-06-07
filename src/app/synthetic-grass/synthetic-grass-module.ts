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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { SyntheticGrassRoutingModule } from './synthetic-grass-routing.module';
import { SyntheticGrassComponent } from './components/synthetic-grass/synthetic-grass.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MessengerService } from '../shopping-list/services/messeger.service';
import { SyntheticGrassItemComponent } from './components/synthetic-grass/synthetic-grass-item/synthetic-grass-item.component';



@NgModule({
  declarations: [
    SyntheticGrassComponent,
    SyntheticGrassItemComponent
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
    MatButtonToggleModule,
    ScrollingModule,
    MatPaginatorModule,
    NgxPaginationModule,
    SyntheticGrassRoutingModule
  ],
  providers: [MessengerService],
  exports: [SyntheticGrassItemComponent]
})

export class SyntheticGrassModule { }

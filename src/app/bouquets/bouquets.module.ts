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
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { BouquetsRoutingModule } from './bouquets-routing.module';
import { BouquetsComponent } from './components/bouquets/bouquets.component';
import { MessengerService } from '../shopping-list/services/messeger.service';
import { BouquetItemComponent } from './components/bouquets/bouquet-item/bouquet-item.component';


@NgModule({
  declarations: [
    BouquetsComponent,
    BouquetItemComponent
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
    MatPaginatorModule,
    NgxPaginationModule,
    BouquetsRoutingModule
  ],
  providers: [MessengerService],
})

export class BouquetsModule { }

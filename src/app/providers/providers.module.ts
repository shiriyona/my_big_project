import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

import { ProvidersListComponent } from './components/providers-list/providers-list.component';
import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersService } from './services/providers.service';
import { ProviderDialogComponent } from './components/providers-list/provider-dialog/provider-dialog.component';
import { AddProviderDialogComponent } from './components/providers-list/add-provider-dialog/add-provider-dialog.component';




@NgModule({
  declarations: [
    ProvidersListComponent,
    ProviderDialogComponent,
    AddProviderDialogComponent
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
    ProvidersRoutingModule
  ],
  providers: [ProvidersService],
})
export class ProvidersModule { }

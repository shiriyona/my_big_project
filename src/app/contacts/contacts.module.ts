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

import { ContactsRoutingModule } from './contacts-routing.module';
import { ProvidersService } from './services/providers.service';
import { UsersService } from './services/users.service';
import { DownloadFileService } from './services/download-file.service';
import { TabComponent } from './components/tab/tab.component';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';
import { ProviderDialogComponent } from './components/providers-list/provider-dialog/provider-dialog.component';
import { AddProviderDialogComponent } from './components/providers-list/add-provider-dialog/add-provider-dialog.component';
import { DialogContentExampleDialog, UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    TabComponent,
    ProvidersListComponent,
    ProviderDialogComponent,
    AddProviderDialogComponent,
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
    MatTabsModule,
    ContactsRoutingModule
  ],
  providers: [],
})

export class ContactsModule { }

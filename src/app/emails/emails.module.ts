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
import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsComponent } from './components/emails/emails.component';
import { AddEmailComponent } from './components/emails/add-email/add-email.component';
import { EmailItemComponent } from './components/emails/email-item/email-item.component';


@NgModule({
  declarations: [
    EmailsComponent,
    AddEmailComponent,
    EmailItemComponent
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
    EmailsRoutingModule
  ],
  providers: [],
})

export class EmailssModule { }

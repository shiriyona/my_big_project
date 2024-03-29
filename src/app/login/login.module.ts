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
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { LogOutComponent } from './components/login/log-out/log-out.component';
import { UserSettingComponent } from './components/login/log-out/user-setting/user-setting.component';
import { UserssModule } from "../users/users.module";


@NgModule({
    declarations: [
        LoginComponent,
        LogOutComponent,
        UserSettingComponent
    ],
    providers: [],
    exports: [LoginComponent, LogOutComponent],
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
        MatMenuModule,
        MatIconModule,
        UserssModule
    ]
})
export class loginModule { }

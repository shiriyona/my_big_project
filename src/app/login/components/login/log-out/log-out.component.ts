import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/models/login.model';
import { LoginService } from 'src/app/login/services/login.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { UserSettingComponent } from './user-setting/user-setting.component';


@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  currentUser: User;

  constructor(private loginService: LoginService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  submit() {
    this.loginService.logout();
  }

  getCurrentUser() {
    this.loginService.sendCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
  }

  userSetting() {
    const dialogRef = this.dialog.open(UserSettingComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

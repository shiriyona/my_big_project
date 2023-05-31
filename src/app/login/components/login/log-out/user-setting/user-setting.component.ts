import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/models/login.model';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {
  currentUser: User

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.loginService.sendCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
  }

}

import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "./login/services/login.service";
import { User } from "./login/models/login.model";
import { USER_ROLE } from "./shared/enums/user-role.enum";

@Injectable()
export class UsersRoleGuard implements CanActivate { 
  currentUser: User;
  constructor(private loginService: LoginService) {}; 

  canActivate() {
    console.log("OnlyLoggedInUsers");
    this.loginService.sendCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
    if (this.currentUser.role===USER_ROLE.MANAGEMENT) { 
      return true;
    } 
    else {
      window.alert("You don't have permission to view this page"); 
      return false;
    }
  }
}
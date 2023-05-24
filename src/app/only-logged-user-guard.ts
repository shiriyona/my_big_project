import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { LoginService } from "./login/services/login.service";

@Injectable()
export class OnlyLoggedUsersGuard implements CanActivate { 
  constructor(private loginService: LoginService) {}; 

  canActivate() {
    console.log("OnlyLoggedInUsers");
    //is admin
    if (this.loginService.isLoggedIn()) { (3)
      return true;
    } else {
      window.alert("You don't have permission to view this page"); (4)
      return false;
    }
  }
}
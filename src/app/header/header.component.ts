import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { USER_ROLE } from '../shared/enums/user-role.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUserRole: USER_ROLE;
  admin: boolean = false

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.userRole()
  }
  
  userRole() {
    this.loginService.sendCurrentRole().subscribe((res) => {
      this.currentUserRole = res;
    })
    if(this.currentUserRole === USER_ROLE.ADMIN){
      this.admin = true;
    }
    else{
      this.admin = false;
    }
    return this.loginService.currentUserRole;
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/services/login.service';
import { USER_ROLE } from '../shared/enums/user-role.enum';
import { User } from '../login/models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: User;
  admin: boolean = false;
  management: boolean = false;

  shoppingListActive = true;
  emailsActive = false;
  contactsActive = false;
  odersActive = false;
  usersActive = false;

  constructor(private loginService: LoginService, router:Router) { 
    // router.navigate(['/shopping-list']);
  }

  ngOnInit(): void {
    this.userRole()
  }
  
  userRole() {
    this.loginService.sendCurrentUser().subscribe((res) => {
      this.currentUser = res;
    });
    if(this.currentUser.role === USER_ROLE.ADMIN){
      this.admin = true;
    }
    else{
      this.admin = false;
    }

    if(this.currentUser.role === USER_ROLE.MANAGEMENT){
      this.management = true;
    }
    else{
      this.management = false;
    }
    // this.loginService.onRole(this.admin);
    return this.loginService.currentUser;
  }

  nonActive() {
    this.shoppingListActive = false;
    this.emailsActive = false;
    this.contactsActive = false;
    this.odersActive = false;
    this.usersActive = false;
  }

  activeShoppingList() {
    this.nonActive();
    this.shoppingListActive = true;
  }

  activeEmails() {
    this.nonActive();
    this.emailsActive = true;
  }

  activeContacts() {
    this.nonActive();
    this.contactsActive = true;
  }

  activeOrders() {
    this.nonActive();
    this.odersActive = true;
  }

  activeUsers() {
    this.nonActive();
    this.usersActive = true;
  }

}

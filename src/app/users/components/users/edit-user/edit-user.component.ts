import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/login/models/login.model';
import { USER_ROLE } from 'src/app/shared/enums/user-role.enum';
import { UsersServices } from 'src/app/users/services/users.services';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild('userNameInput') userNameInputRef: ElementRef;
  @ViewChild('passwordInput') passwordInputRef: ElementRef;
  @ViewChild('roleInput') roleInputRef: ElementRef;  
  @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
  @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
  @ViewChild('imgInput') imgInputRef: ElementRef;
  user: User;
  userRoles= []
  role


  constructor(private usersService: UsersServices) { }

  ngOnInit(): void {
    this.getEditUser();
    this.userRoles.push(USER_ROLE.ADMIN);
    this.userRoles.push(USER_ROLE.SALER);
    this.userRoles.push(USER_ROLE.MANAGEMENT);
  }

  getEditUser(){
    this.user = this.usersService.getEditUser();
  }

  selectRole(userRole){
    this.role = userRole;
  }

  saveChanges() {
    const userName = this.userNameInputRef.nativeElement.value;;
    const userPassword = this.passwordInputRef.nativeElement.value;
    const userRole = this.role;    
    const userFirstName = this.firstNameInputRef.nativeElement.value;
    const userLasttName = this.lastNameInputRef.nativeElement.value;
    const userImg = "../../../../assets/img/providers_pic.png";
    const editUser = new User(this.user.id, userName, userFirstName, userLasttName, userPassword, userRole, userImg);
    this.usersService.onUserEdit(editUser)
  }

}


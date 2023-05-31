import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/login/models/login.model';
import { USER_ROLE } from 'src/app/shared/enums/user-role.enum';
import { UsersServices } from 'src/app/users/services/users.services';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild('idInput') idInputRef: ElementRef;
  @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
  @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
  @ViewChild('userNameInput') userNameInputRef: ElementRef;
  @ViewChild('passwordInput') passwordInputRef: ElementRef;
  @ViewChild('roleInput') roleInputRef: ElementRef;
  @ViewChild('imgInput') imgInputRef: ElementRef;

  userRoles = [];
  role;

  constructor(private usersServices: UsersServices) { }

  ngOnInit(): void {
    this.userRoles.push(USER_ROLE.ADMIN);
    this.userRoles.push(USER_ROLE.SALER);
    this.userRoles.push(USER_ROLE.MANAGEMENT);
  }

  selectRole(userRole){
    this.role = userRole;
  }

  addUser() {
    const userId = this.idInputRef.nativeElement.value;
    const userFirstName = this.firstNameInputRef.nativeElement.value;
    const userLasttName = this.lastNameInputRef.nativeElement.value;
    const userName = this.userNameInputRef.nativeElement.value;;
    const userPassword = this.passwordInputRef.nativeElement.value;;
    const userRole = this.role;
    const userImg = "../../../../assets/img/providers_pic.png";
    const newUser = new User(userId, userName, userFirstName, userLasttName, userPassword, userRole, userImg);
    this.usersServices.sendNewUser(newUser);
  }

}

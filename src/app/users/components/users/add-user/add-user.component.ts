import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/login/models/login.model';
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
  @ViewChild('roleInput') roleInputRef: ElementRef;
  @ViewChild('imgInput') imgInputRef: ElementRef;

  constructor(private usersServices: UsersServices) { }

  ngOnInit(): void {
  }

  addUser() {
    const userId = uuidv4();
    const userName = uuidv4();
    const userPassword = uuidv4();
    const userFirstName = this.firstNameInputRef.nativeElement.value;
    const userLasttName = this.lastNameInputRef.nativeElement.value;
    const userRole = this.roleInputRef.nativeElement.value;
    const userImg = "../../../../assets/img/providers_pic.png";
    const newUser = new User(userId, userName, userPassword, userFirstName, userLasttName, userRole, userImg);
    this.usersServices.sendNewUser(newUser);
  }

}

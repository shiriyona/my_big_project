import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersServices } from '../../services/users.services';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import { User } from 'src/app/login/models/login.model';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[] = [];
  editedUser: User
  getUsersSubscrition: Subscription;

  constructor(private usersService: UsersServices, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
    this.usersService.onNewUser().subscribe((user: User) => {
      this.onNewUser(user)
    });
    this.usersService.onGetUserEdit().subscribe((user: User) => {
      this.onEditUser(user)
    });
  }

  getUsers() {
    this.getUsersSubscrition = this.usersService.getUsers().subscribe(res =>{
      this.users = res
    });
  }

  addUser(){
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onNewUser(user: User) {
    this.users.push(user)
    localStorage.setItem('usersInfo', JSON.stringify(this.users));
  }

  editUser(user){
    this.usersService.onEditUser(user)
    const dialogRef = this.dialog.open(EditUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onEditUser(editedUser: User) {
    for (let i = this.users.length - 1; i >= 0; i--) {
      if (editedUser.id === this.users[i].id) {
        this.users[i] = editedUser;
        break;
      }
    }
  }

  deleteUser(user: User) {
    for (let i = this.users.length - 1; i >= 0; i--) {
      if (this.users[i].id === user.id) {
        this.users.splice(i, 1);
        break;
      }
    }
  }

  ngOnDestroy(): void {
    this.getUsersSubscrition.unsubscribe();
  }

}

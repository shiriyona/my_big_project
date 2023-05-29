import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/models/login.model';
import { UsersServices } from 'src/app/users/services/users.services';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User

  constructor(private usersService: UsersServices) { }

  ngOnInit(): void {
  }

  getEditUser(){
    this.user = this.usersService.getEditUser();
  }

}

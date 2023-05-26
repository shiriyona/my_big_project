import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../../models/user.model';
import { Subscription } from 'rxjs';
import { UsersServices } from '../../services/users.services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: UserDetails[] = [];
  getUsersSubscrition: Subscription;

  constructor(private usersService: UsersServices) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.getUsersSubscrition = this.usersService.getUsers().subscribe(res =>{
      this.users = res
    });
  }

  ngOnDestroy(): void {
    this.getUsersSubscrition.unsubscribe();
  }

}

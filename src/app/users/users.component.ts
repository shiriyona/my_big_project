import { Component, OnInit } from '@angular/core';
import { Users } from './models/users.model';
import { UsersService } from './services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user: Users
  users: any
  panelOpenState = false;
  loadUsersSubscription: Subscription;  
  

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.loadUsersSubscription =  this.usersService.getUsers().subscribe(res => {
       this.users = res;
     });
   }

   openRow(user){
    user.isOpen = !user.isOpen;
}


}




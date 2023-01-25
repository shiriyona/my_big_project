import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from '../../models/users.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() user: Users
  @Input() users
  @Input() userSelected
  isSelectedItem = false
  userDetails: Users[]
  loadUsersSubscription: Subscription;  
  
  loadAllUsersDetailsSubscription: Subscription;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {  
    this.getUsers()
  }

  getUsers() {
    this.loadUsersSubscription =  this.usersService.getUsers().subscribe(res => {
       this.users = res;
     });
   }

   selectUser(user) {
    // this.isSelectedItem = true;
    this.userSelected = user;
    // this.userDetails.slice(user);
    // var userDetails = Object.keys(user).map(key => ({type: key, value: user[key]}));
    // console.log(userDetails);
    this.usersService.getClickedUserDetails(user)
    

    this.clickCount++;
    setTimeout(() => {
        if (this.clickCount === 1) {
             // single
        } else if (this.clickCount === 2) {
            // double
            if (this.isSelectedItem === false) {
              this.isSelectedItem = true;
            }
            else if (this.isSelectedItem === true) {
              this.isSelectedItem = false;
            }
        }
        this.clickCount = 0;
    }, 250)

    this.usersService.getIfClickedUser(this.isSelectedItem)
  }

  clickCount = 0;

}


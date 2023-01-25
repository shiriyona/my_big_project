import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/users/models/users.model';
import { UsersService } from 'src/app/users/services/users.service';
import { PeriodicElement } from 'src/app/users/users.component';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  columnsToDisplay = ['firstName', 'lastName'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Users | null;

 @Input() user: Users
 isSelectedItem= false
 panelOpenState = false;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  selectUser(user) {
    this.usersService.getClickedUserDetails(user)
    this.clickCount++;
    setTimeout(() => {
        if (this.clickCount === 1) {
             // single
        } else if (this.clickCount === 2) {
            // double
            if (this.isSelectedItem === false) {
              this.isSelectedItem = true;
              // this.user.open();
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

    

  viewDetails() {

  }

}

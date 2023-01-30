import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


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
  

  constructor(private usersService: UsersService,public dialog: MatDialog) {
  }

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

openDialog() {
  const dialogRef = this.dialog.open(DialogContentExampleDialog);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
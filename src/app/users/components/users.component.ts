import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DownloadFileService } from '../services/download-file.service';


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
  userColor: boolean = false;
  

  constructor(private usersService: UsersService,public dialog: MatDialog) {
    // this.g(this.user);

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

g(user){
  if (this.user.id%2===1) {
    this.userColor = true;
  }
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
export class DialogContentExampleDialog {
  user: Users
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  uploadImg = false

  // Inject service 
  constructor(private fileUploadService: DownloadFileService) { }

  ngOnInit(): void {
  }

  // On file Select
  onChange(event) {
    this.uploadImg = true
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
      this.loading = !this.loading;
      console.log(this.file);
      this.fileUploadService.upload(this.file).subscribe(
          (event: any) => {
              if (typeof (event) === 'object') {

                  // Short link via api response
                  this.shortLink = event.link;
                  this.loading = false; // Flag variable 
                }
            }
        );

   
    }
}
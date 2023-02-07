import { Component, Input, OnInit } from '@angular/core';
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
  @Input() img
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

openDialog(img) {
  const dialogRef = this.dialog.open(DialogContentExampleDialog);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  this.usersService.sendImg(img);
}

}

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./users.component.scss']
})
export class DialogContentExampleDialog {
  img
  selectedFile: ImageSnippet;

  constructor(private imageService: DownloadFileService, private usersService: UsersService){
    this.getImg()
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  getImg() {
    this.img=this.usersService.getImg();
  }

  private onError() {
    // this.selectedFile.pending = false;
    // this.selectedFile.status = 'fail';
    // this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
        this.img=this.selectedFile.src
    });

    reader.readAsDataURL(file);
  }
}
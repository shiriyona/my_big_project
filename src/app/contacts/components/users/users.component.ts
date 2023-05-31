import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../models/customers.model';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DownloadFileService } from '../../services/download-file.service';
import { CustomersService } from '../../services/customers.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() img
  user: Customer
  users: any
  panelOpenState = false;
  loadUsersSubscription: Subscription;
  userColor: boolean = false;


  constructor(private customersService: CustomersService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.loadUsersSubscription = this.customersService.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  openRow(user) {
    user.isOpen = !user.isOpen;
  }

  g(user) {
    if (this.user.id % 2 === 1) {
      this.userColor = true;
    }
  }

  openDialog(img) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.customersService.sendImg(img);
  }

}

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) { }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'add-customer.html',
  styleUrls: ['./users.component.scss']
})
export class DialogContentExampleDialog {
  img
  selectedFile: ImageSnippet;

  constructor(private imageService: DownloadFileService, private customersService: CustomersService) {
    this.getImg()
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  getImg() {
    this.img = this.customersService.getImg();
  }

  private onError() {
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
      this.img = this.selectedFile.src
    });

    reader.readAsDataURL(file);
  }
}
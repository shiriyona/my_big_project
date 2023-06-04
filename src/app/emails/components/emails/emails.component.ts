import { Component, OnInit, OnDestroy } from '@angular/core';
import { Email } from '../../models/emails.model';
import { EmailsService } from '../../services/emails.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEmailComponent } from './add-email/add-email.component';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit, OnDestroy {
  firstemails: Email[] = [];
  emails: Email[] = [];
  allEmails: Email[] = [];
  deletedEmails: Email[] = [];
  selectedRow: Email;
  getEmailsSubscrition: Subscription;
  getDeletedEmailsSubscrition: Subscription;
  deleteIconClicked = false
  emailToList = true;
  noselect = true;

  constructor(private emailsService: EmailsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmails();
    this.emailsService.getEmail().subscribe((email: Email) => {
      for (let i in this.emails) {
        if (this.emails[i].id === email.id) {
          this.deletedEmail(email);
          this.emailToList = false;
          break;
        }
      }   
      if (this.emailToList === true) {
        this.addEmailToTheList(email)
      }
      this.emailToList = true;
    });
  }

  addEmailToTheList(email){
    this.emails.push(email);
  }

  getEmails() {
    this.getEmailsSubscrition = this.emailsService.getEmails().subscribe(res => {
    this.emails = res;
    });
  }

  deletedEmail(deletedEmail: Email) {
    for (let i =  this.emails.length - 1; i >= 0; i--) {
      if (this.emails[i].id === deletedEmail.id) {
          this.emails.splice(i, 1);
          break;
        }
      }
      this.emailsService.sendDeletedEmails(deletedEmail);

    // const elementIdx = this.emails?.findIndex((email) => {
    //   email.id === deletedEmail?.id
    // });
    // if (elementIdx >= -1) {
    //   this.emails.splice(elementIdx, 1);
    
    // }
    // this.getEmails();
  }

  onSelectRow(row: Email) {    
    this.noselect = false;
    this.selectedRow = row;

  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onNewEmail(){
    this.getEmails();
  }

  getDeletedEmails() {
    this.getDeletedEmailsSubscrition = this.emailsService.getDeletedEmails().subscribe(res => {
      this.deletedEmails = res;
    });
    this.selectedRow = null;
    this.deleteIconClicked = true;  
    this.noselect = true;
  }

  home(){
    this.selectedRow = null
    this.deleteIconClicked = false;
    this.noselect = true;
  }

  ngOnDestroy(): void {
    this.getEmailsSubscrition.unsubscribe();
    // this.getDeletedEmailsSubscrition.unsubscribe();
  }


}


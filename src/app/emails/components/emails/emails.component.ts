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
  deletedEmails: Email[] = [];
  selectedRow: Email;
  getEmailsSubscrition: Subscription;
  getDeletedEmailsSubscrition: Subscription;
  private activeSub: Subscription;
  trashIcon = false
  emailsActivated = false;

  constructor(private emailsService: EmailsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmails();
    this.activeSub = this.emailsService.activatedEmitter.subscribe(didActivate => {
      this.emailsActivated = didActivate;
      if(this.emailsActivated === true) {
        this.emailsService.onGetEmails().subscribe(res => {
          this.emails = res;
          this.emailsActivated === false;
        });
      }
    })
  }

  getEmails() {
    this.getEmailsSubscrition = this.emailsService.getEmails().subscribe(res => {
      this.emails = res;
      this.emailsService.setEmails(res);
    });
  }

  addEmail(email){
    this.emails.push(email)
  }

  onSelectRow(row: Email) {
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
  }

  ngOnDestroy(): void {
    this.getEmailsSubscrition?.unsubscribe();
    this.getDeletedEmailsSubscrition?.unsubscribe();
  }

}


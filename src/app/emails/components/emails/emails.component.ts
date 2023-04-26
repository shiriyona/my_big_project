import { Component, OnInit, OnDestroy } from '@angular/core';
import { Email } from '../../models/emails.model';
import { EmailsService } from '../../services/emails.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEmailComponent } from '../add-email/add-email.component';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit, OnDestroy {
  emails: Email[] = [];
  selectedRow: Email;
  getEmailsSubscrition: Subscription;

  constructor(private emailsService: EmailsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmails();
  }

  getEmails() {
    this.getEmailsSubscrition = this.emailsService.getEmails().subscribe(res => {
      this.emails = res;
    });
  }

  onSelectRow(row: Email) {
    this.selectedRow = row;
  }

  ngOnDestroy(): void {
    this.getEmailsSubscrition?.unsubscribe();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddEmailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  add(){
    this.getEmails();
  }
}


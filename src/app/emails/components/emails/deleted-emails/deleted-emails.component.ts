import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Email } from 'src/app/emails/models/emails.model';
import { EmailsService } from 'src/app/emails/services/emails.service';

@Component({
  selector: 'app-deleted-emails',
  templateUrl: './deleted-emails.component.html',
  styleUrls: ['./deleted-emails.component.scss']
})
export class DeletedEmailsComponent implements OnInit {
  @Input() deletedEmail
  getDeletedEmailsSubscrition: Subscription;
  deletedEmails: Email[] = [];

  constructor(private emailsService: EmailsService) { }

  ngOnInit(): void {
    this.getDeletedEmails()
  }

  getDeletedEmails() {
    this.getDeletedEmailsSubscrition = this.emailsService.getDeletedEmails().subscribe(res => {
      this.deletedEmails = res;
    });
  }
}

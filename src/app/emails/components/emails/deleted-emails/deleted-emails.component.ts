import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailsService } from 'src/app/emails/services/emails.service';

@Component({
  selector: 'app-deleted-emails',
  templateUrl: './deleted-emails.component.html',
  styleUrls: ['./deleted-emails.component.css']
})
export class DeletedEmailsComponent implements OnInit {
  deletedEmails
  getDeletedEmailsSubscrition: Subscription;

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

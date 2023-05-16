import { Component, Input, OnInit } from '@angular/core';
import { Email } from 'src/app/emails/models/emails.model';
import { EmailsService } from 'src/app/emails/services/emails.service';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  @Input() email: Email;
  changeText = false;

  constructor(private emailsService: EmailsService) { }

  ngOnInit(): void {
  }

  deleteEmail(deleteEmail){
    this.emailsService.deletedEmail(deleteEmail);
    this.emailsService.activatedEmitter.next(true);
  }

}

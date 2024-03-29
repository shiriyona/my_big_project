import { Component, Input, OnInit } from '@angular/core';
import { Email } from 'src/app/emails/models/emails.model';
import { EmailsService } from 'src/app/emails/services/emails.service';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss']
})
export class EmailItemComponent implements OnInit {
  @Input() email: Email;
  changeText = false;

  constructor(private emailsService: EmailsService) { }

  ngOnInit(): void {
  }

  deleteEmail(deleteEmail){
    this.emailsService.sendEmail(deleteEmail);
  }

}

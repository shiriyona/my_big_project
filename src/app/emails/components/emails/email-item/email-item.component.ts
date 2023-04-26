import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/emails/models/emails.model';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  email: Email;

  constructor() { }

  ngOnInit(): void {
  }

}

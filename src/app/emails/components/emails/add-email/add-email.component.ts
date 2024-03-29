import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EmailsService } from '../../../services/emails.service';
import { Email } from '../../../models/emails.model';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css']
})
export class AddEmailComponent implements OnInit {
  @ViewChild('idInput') idInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('timeInput') timeInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;
 
  constructor(private emailsService: EmailsService) { }

  ngOnInit(): void {
  }

  addEmail() {
    var d = new Date().toDateString;
    const emailId = uuidv4();
    const emailName = this.nameInputRef.nativeElement.value;
    const emailSubject = this.subjectInputRef.nativeElement.value;
    const emailTime = d;
    const emailDescription = this.descriptionInputRef.nativeElement.value;
    const newEmail = new Email(emailId, emailName, emailSubject, emailTime, emailDescription);
    this.emailsService.sendEmail(newEmail);
  }

}

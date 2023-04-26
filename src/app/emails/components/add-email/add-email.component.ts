import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EmailsService } from '../../services/emails.service';
import { Email } from '../../models/emails.model';

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
  @Output() emailAdded = new EventEmitter<Email>()

  constructor(private emailsService: EmailsService) { }

  ngOnInit(): void {
  }

  addEmail() {
    const emailId = this.idInputRef.nativeElement.value;
    const emailName = this.nameInputRef.nativeElement.value;
    const emailSubject = this.subjectInputRef.nativeElement.value;
    const emailTime = this.timeInputRef.nativeElement.value;
    const newEmail = new Email(emailId, emailName, emailSubject, emailTime);
    this.emailAdded.emit(newEmail)
    this.emailsService.addEmailToTheList(newEmail);
    return this.emailsService.EMAILS_MOCK_DATA
  }

}

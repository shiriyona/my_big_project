import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { EMAILS_MOCK_DATA } from '../components/constants/email.mock';
import { Email } from '../models/emails.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  emails: Email[] = [];
  subject = new Subject();
  deletedEmails: Email[] = [];
  activatedEmitter = new Subject<boolean>();

  constructor() { }

  getEmails(): Observable<any> {
    return of(EMAILS_MOCK_DATA);
  }

  setEmails(emails: Email[]) {
    this.emails = emails
  }

  addEmailToTheList(email: Email): void {
    this.emails.push(email);
  }

  deletedEmail(deletedEmail: Email) {
    const elementIdx = this.emails?.findIndex((email) => {
      email.id === deletedEmail?.id
    });
    if (elementIdx >= -1) {
      this.emails.splice(elementIdx, 1);
      this.deletedEmails.push(deletedEmail);
    }
  }

  onGetEmails() {
    return of(this.emails);
  }

  getDeletedEmails(): Observable<any> {
    return of(this.deletedEmails);
  }

}

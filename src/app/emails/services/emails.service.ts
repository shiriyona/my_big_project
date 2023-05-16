import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { EMAILS_MOCK_DATA } from '../components/constants/email.mock';
import { Email } from '../models/emails.model';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class EmailsService {



  // emails: Email[] = [];
  subject = new Subject();
  deletedEmails: Email[] = [];
  activatedEmitter = new Subject<boolean>();

  constructor() { }

  getEmails(): Observable<any> {
    return of(EMAILS_MOCK_DATA);
  }

  sendEmail(email: Email) {
    this.subject.next(email);
  }

  getEmail() {
    return this.subject.asObservable();
  }

  // deletedEmail(deletedEmail: Email) {
  //   const elementIdx = this.emails?.findIndex((email) => {
  //     email.id === deletedEmail?.id
  //   });
  //   if (elementIdx >= -1) {
  //     this.emails.splice(elementIdx, 1);
  //     this.deletedEmails.push(deletedEmail);
  //   }
  // }

  sendDeletedEmails(deletedEmails: Email){
    this.deletedEmails.push(deletedEmails);
  }

  getDeletedEmails(): Observable<any> {
    return of(this.deletedEmails);
  }

}

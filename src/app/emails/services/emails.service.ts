import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EMAILS_MOCK_DATA } from '../components/constants/email.mock';
import { Email } from '../models/emails.model';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {
  EMAILS_MOCK_DATA: any;

  constructor() { }

  getEmails(): Observable<any> {
    return of(EMAILS_MOCK_DATA);
  }

  addEmailToTheList(email: Email): void {
    EMAILS_MOCK_DATA.push(email);
    this.addNewEmail()
  }

  addNewEmail(): Observable<any> {
    return of(EMAILS_MOCK_DATA);
  }

}

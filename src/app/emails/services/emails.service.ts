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

  deleteEmail(deletedEmail){
    for (let i = EMAILS_MOCK_DATA.length - 1; i >= 0; i--) {
      if (EMAILS_MOCK_DATA[i].id === deletedEmail.id) {
          EMAILS_MOCK_DATA.splice(i, 1);
      }
    } 
  }

  addNewEmail(): Observable<any> {
    return of(EMAILS_MOCK_DATA);
  }

}

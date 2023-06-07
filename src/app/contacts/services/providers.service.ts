import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Provider } from '../models/providers.model';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  subject = new Subject();
  subject2 = new Subject();
  editProvider: Provider;
  private providers: Provider[] = [
    {
      firstName: 'Deal',
      lastName: 'Lenson',
      phone: '0543657847',
      id: '245334471',
      email: 'deallenson@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Max',
      lastName: 'Stock',
      phone: '0543657847',
      id: '222368492',
      email: 'maxstock@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Don',
      lastName: 'Levi',
      phone: '054362227',
      id: '235368473',
      email: 'donlevi@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Bar',
      lastName: 'zeg',
      phone: '0543657847',
      id: '235361114',
      email: 'barzeg@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Shark',
      lastName: 'Mak',
      phone: '0543657847',
      id: '235118475',
      email: 'sharkmak@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Zar',
      lastName: 'Fox',
      phone: '0543657847',
      id: '235368996',
      email: 'zarFox@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Guy',
      lastName: 'Hail',
      phone: '0543657888',
      id: '235368477',
      email: 'guyhail@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Lock',
      lastName: 'Jars',
      phone: '0543657847',
      id: '235368668',
      email: 'lockJars@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Mas',
      lastName: 'Sahn',
      phone: '0543657847',
      id: '235366979',
      email: 'masshn@gamil.com',
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      firstName: 'Lix',
      lastName: 'Dar',
      phone: '0543657847',
      id: '215268675',
      email: 'lixdar@gamil.com',   
      addres: 'New York',
      description: `Deal is a company With a standard weight of 10`,
   
    },
  ];

  constructor() { }

  addProviders(): Observable<any> {
    return of(this.providers.slice());
  }

  sendNewProvider(provider: Provider) {
    this.subject.next(provider);
  }

  addNewProvider() {
    return this.subject.asObservable();
  }

  providerEdit(provider: Provider) {
    this.editProvider = provider;
  }

  onEditprovider() {
    return this.editProvider;
  }

  sendEditprovider(editProvider: Provider) {
    this.subject2.next(editProvider);
  }

  getEditprovider() {
    return this.subject2.asObservable();
  }

}

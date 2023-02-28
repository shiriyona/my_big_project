import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Provider } from '../models/providers.model';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  private providerDetails: Provider[] = [
    {
      position: 1,
      firstName: 'Deal',
      lastName: 'Lenson',
      phone: '0543657847',
      id: '235368475',
      email: 'deallenson@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 2,
      firstName: 'Max',
      lastName: 'Stock',
      phone: '0543657847',
      id: '235368475',
      email: 'maxstock@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 3,
      firstName: 'Don',
      lastName: 'Levi',
      phone: '0543657847',
      id: '235368475',
      email: 'donlevi@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 4,
      firstName: 'Bar',
      lastName: 'zeg',
      phone: '0543657847',
      id: '235368475',
      email: 'barzeg@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 5,
      firstName: 'Shark',
      lastName: 'Mak',
      phone: '0543657847',
      id: '235368475',
      email: 'sharkmak@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 6,
      firstName: 'Zar',
      lastName: 'Fox',
      phone: '0543657847',
      id: '235368475',
      email: 'zarFox@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 7,
      firstName: 'Guy',
      lastName: 'Hail',
      phone: '0543657847',
      id: '235368475',
      email: 'guyhail@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 8,
      firstName: 'Lock',
      lastName: 'Jars',
      phone: '0543657847',
      id: '235368475',
      email: 'lockJars@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 9,
      firstName: 'Mas',
      lastName: 'Sahn',
      phone: '0543657847',
      id: '235368475',
      email: 'masshn@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
    {
      position: 10,
      firstName: 'Lix',
      lastName: 'Dar',
      phone: '0543657847',
      id: '235368475',
      email: 'lixdar@gamil.com',
      addres: 'New York',
      img: '../../../../assets/img/providers_pic.png',
      description: `Deal is a company With a standard weight of 10`,
    },
  ];
 
  sendProviders():Observable<any> {
    return of(this.providerDetails.slice());
  }

  addProviderToTheList(provider: Provider){
    this.providerDetails.push(provider);
    this.sendNewProviders()
  }

  sendNewProviders() {
    return of(this.providerDetails.slice());
  }
  

  constructor() { }
}

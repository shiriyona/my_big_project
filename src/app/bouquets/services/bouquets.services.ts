import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { BOUQUEtS_MOCK_DATA } from '../constants/bouquets.mock';


@Injectable({
  providedIn: 'root'
})
export class BouquetsService {

  constructor() { }

  getBouquets() {
    return of(BOUQUEtS_MOCK_DATA);
  }

}
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { SYNTHETIC_MOCK_DATA } from '../constants/synthetic-grass.mock';


@Injectable({
  providedIn: 'root'
})
export class SyntheticGrasService {

  constructor() { }

  getsynGrass() {
    return of(SYNTHETIC_MOCK_DATA);
  }

}
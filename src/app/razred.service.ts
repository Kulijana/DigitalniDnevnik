import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RAZREDI } from './mok.razredi';
import { Razred } from './razred';

@Injectable({
  providedIn: 'root'
})
export class RazredService {

  constructor() { }

  getRazredi(): Observable<Razred[]>{
    return of(RAZREDI);
  }

  getRazred(name: string): Observable<Razred>{
    return of(RAZREDI.find(razred => name === razred.name));
  }
}

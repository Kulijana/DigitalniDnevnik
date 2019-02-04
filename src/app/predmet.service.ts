import { Injectable } from '@angular/core';
import { PREDMETI } from "./mock.predmeti";
import { Observable, of } from 'rxjs';
import { Predmet } from './predmet';
@Injectable({
  providedIn: 'root'
})
export class PredmetService {
  constructor() { }

  getPredmeti(): Observable<Predmet[]>{
    return of(PREDMETI);
  }

  getPredmet(name: string): Observable<Predmet>{
    return of(PREDMETI.find(predmet => predmet.name === name));
  }
}

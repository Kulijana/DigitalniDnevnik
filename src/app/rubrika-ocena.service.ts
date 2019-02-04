import { Injectable } from '@angular/core';
import { RUBRIKAOCENA } from "./mock.rubrika-ocena";
import { Observable, of } from 'rxjs';
import { RubrikaOcena } from './rubrika-ocena';

@Injectable({
  providedIn: 'root'
})
export class RubrikaOcenaService {
  constructor() { }

  //TODO: pull it from a server
  getRubrike(): Observable<RubrikaOcena[]>{
    return of(RUBRIKAOCENA);
  }

  //TODO: pull it from a server
  getRubrika(student: string, subject: string): Observable<RubrikaOcena>{
    return of(RUBRIKAOCENA.find(r => r.student === student && r.subject === subject));
  }

  //TODO: put on a server
  addOcena(student: string, subject: string, grade: number): void{
    RUBRIKAOCENA.find(r => r.student === student && r.subject === subject).grades.push(+grade);
  }

  createRubrika(student: string, subject: string, grade: number): Observable<RubrikaOcena>{
    const rubrika: RubrikaOcena = {student: student, subject: subject, grades: [+grade]};
    RUBRIKAOCENA.push(rubrika);
    return of(rubrika);
  }
}

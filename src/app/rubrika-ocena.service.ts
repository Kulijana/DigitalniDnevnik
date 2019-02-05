import { Injectable } from '@angular/core';
import { RUBRIKAOCENA } from "./mock.rubrika-ocena";
import { Observable, of } from 'rxjs';
import { RubrikaOcena } from './rubrika-ocena';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class RubrikaOcenaService {
  constructor(private http: HttpClient) { }

  private rubrikeUrl ='api/rubrikaOcena';

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}


  //TODO: pull it from a server
  getRubrike(): Observable<RubrikaOcena[]>{
    return this.http.get<RubrikaOcena[]>(this.rubrikeUrl)
        .pipe(
          catchError(this.handleError('getUcenici',[]))
        );
    }

  //TODO: pull it from a server
  getRubrika(student: string, subject: string): Observable<RubrikaOcena>{
    return of(RUBRIKAOCENA.find(r => r.student === student && r.subject === subject));
  }

  getRubrikeForStudent(student: string): Observable<RubrikaOcena[]>{
    return this.http.get<RubrikaOcena[]>(this.rubrikeUrl).pipe(
      map(rubrike => rubrike.filter( rubrika => rubrika.student === student)
    ));
    //return of(RUBRIKAOCENA.filter(r => r.student === student));
  }

  //TODO: put on a server
  addOcena(student: string, subject: string, grade: number): void{
    RUBRIKAOCENA.find(r => r.student === student && r.subject === subject).grades.push(+grade);
  }

  // createRubrika(student: string, subject: string, grade: number): Observable<RubrikaOcena>{
  //   const rubrika: RubrikaOcena = {student: student, subject: subject, grades: [+grade]};
  //   RUBRIKAOCENA.push(rubrika);
  //   return of(rubrika);
  // }

}

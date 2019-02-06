import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Predmet } from './predmet';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  private predmetiUrl = '/app/predmeti';
  constructor(private http: HttpClient) { }

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

  getPredmeti(): Observable<Predmet[]>{
    return this.http.get<Predmet[]>(this.predmetiUrl)
      .pipe(
        catchError(this.handleError('getPredmeti',[]))
      );
  }

  getPredmet(id: number): Observable<Predmet>{
    const url = `${this.predmetiUrl}/${id}`
    return this.http.get<Predmet>(url)
      .pipe(
        catchError(this.handleError<Predmet>(`getPredmet id=${id}`))
      )
  }

  getPredmetiForNastavnik(name: string): Observable<Predmet[]>{
    return this.http.get<Predmet[]>(this.predmetiUrl)
      .pipe(
        map(predmeti => predmeti = predmeti.filter(predmet => predmet.professor===name))
      );
  }
}

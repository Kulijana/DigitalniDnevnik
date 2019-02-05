import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Ucenik } from './ucenik';
import { catchError, find } from 'rxjs/operators';


const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class UcenikService {

  private uceniciUrl ='api/ucenici';
  private loginId: number;

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


  getUcenici(): Observable<Ucenik[]>{
    return this.http.get<Ucenik[]>(this.uceniciUrl)
      .pipe(
        catchError(this.handleError('getUcenici',[]))
      );
  }

  getUcenik(id: number): Observable<Ucenik>{
    const url = `${this.uceniciUrl}/${id}`
    return this.http.get<Ucenik>(url).pipe(
      catchError(this.handleError<Ucenik>(`getUcenik id=${id}`))
    );
  }

  validUcenik(username: string, password: string): Observable<number>{
    this.getUcenici()
      .subscribe(ucenici => 
        this.loginId = ucenici.find(ucenik => ucenik.username === username && ucenik.password === password).id);
    return of(this.loginId);
    }
}

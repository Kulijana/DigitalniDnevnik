import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Nastavnik } from './nastavnik';
import { catchError } from 'rxjs/operators';

const HttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}


@Injectable({
  providedIn: 'root'
})
export class NastavnikService {

  private nastavniciUrl ='api/nastavnici';
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
  getNastavnici(): Observable<Nastavnik[]>{
    return this.http.get<Nastavnik[]>(this.nastavniciUrl)
      .pipe(
        catchError(this.handleError('getNastavnici',[]))
      );
  }

  getNastavnik(id: number): Observable<Nastavnik>{
    const url = `${this.nastavniciUrl}/${id}`
    return this.http.get<Nastavnik>(url).pipe(
      catchError(this.handleError<Nastavnik>(`getNastavnik id=${id}`))
    );
  }

  // validNastavnik(username: string, password: string): Observable<number>{
  //   this.getNastavnici()
  //     .subscribe((nastavnici) => {
  //       var nastavnik = nastavnici.find(nastavnik => nastavnik.username === username && nastavnik.password === password);
  //       if(nastavnik){
  //         return of(nastavnik.id);
  //         // console.log("NASTAVNIK NIJE UNDEFINED, DOKAZ: " + nastavnik.id);
  //         // this.loginId = nastavnik.id;
  //       }
  //       else
  //         return of(0);
  //     });
  //   return of(this.loginId);
  //   }


}

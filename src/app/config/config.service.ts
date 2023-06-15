import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface Config {
    heroesUrl: string;
    textfile: string;
    date: any;
  }

@Injectable()
export class ConfigService {
    configUrl = 'assets/config.json'

  constructor(private http: HttpClient) { }

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl).pipe(retry(3), catchError(this.handleError));
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(this.configUrl, {observe: 'response'})
  }


  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      // client-side or network error
      console.error('An error occured:', error.error)
    } else {
      // backend error
      // response body contains backend error
      console.error(`Backend returned code ${error.status}, boday was:`, error.error)
    }

    //return an observable with a user-facing error message 
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url').pipe(catchError(this.handleError))
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of, throwError, zip } from 'rxjs';
import {
  catchError,
  groupBy,
  mergeMap,
  toArray,
  switchMap,
  map,
  takeLast,
} from 'rxjs/operators';
import { Beer } from '../_models/beer';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  // Define API
  apiURL = '/beers/';

  arr = [];

  constructor(private http: HttpClient) {}

  public getBeers(): Observable<any> {
    return this.http.get<any>(this.apiURL).pipe(
      switchMap((val) => from(val)),
      groupBy((beersList: any) => beersList.brewer),
      mergeMap((group) => zip(of(group.key), group.pipe(toArray()))),
      map((val) => {
        const container = {};
        container['brewer'] = val[0];
        container['beers'] = val[1];
        this.arr.push(container);
        return this.arr;
      }),
      takeLast(1),
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

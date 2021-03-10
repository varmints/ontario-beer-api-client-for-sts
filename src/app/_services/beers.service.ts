import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, of, throwError, zip } from 'rxjs';
import {
  catchError,
  groupBy,
  mergeMap,
  toArray,
  switchMap,
  map,
  takeLast,
  filter,
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  // Define API
  apiURL = '/beers/';
  arr = [];
  private beersByBrewer = new BehaviorSubject([]);
  currentBeersByBrewer = this.beersByBrewer.asObservable();

  constructor(private http: HttpClient) {}

  changeBeers(beers) {
    this.beersByBrewer.next(beers);
  }

  public getBeers(): Observable<any> {
    return this.http.get<any>(this.apiURL).pipe(
      switchMap((val) => from(val)),
      map((val: any = {}) => {
        let litre = val.size.match(/\d+/g).reduce((a, b) => (a + b) / 1000);
        let price = val.price;
        val.price_per_litre = (price / litre).toFixed(2);
        return val;
      }),
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

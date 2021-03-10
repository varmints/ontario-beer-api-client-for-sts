import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  private defaultOption = { name: 'Name', value: 'name' };
  private availableOptions;
  private sortBy = new BehaviorSubject(this.getSortBy());
  currentSortBy = this.sortBy.asObservable();

  constructor() {
    this.availableOptions = [
      { name: 'Name', value: 'name' },
      { name: 'Price per litre', value: 'price_per_litre' },
      { name: 'Type', value: 'type' },
    ];
  }

  changeSortBy(valueSortBy) {
    this.sortBy.next(valueSortBy);
    localStorage.setItem('user-sort-by', JSON.stringify(valueSortBy));
  }

  getAvailableOptions() {
    return this.availableOptions;
  }

  getSortBy() {
    if (localStorage.getItem('user-sort-by')) {
      return JSON.parse(localStorage.getItem('user-sort-by'));
    } else {
      localStorage.setItem('user-sort-by', JSON.stringify(this.defaultOption));
      return this.defaultOption;
    }
  }
}

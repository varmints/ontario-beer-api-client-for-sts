import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToLoadService {
  private defaultOption: number = 15;
  private toLoad = new BehaviorSubject(this.getToLoad());
  currentToLoad = this.toLoad.asObservable();
  private availableOptions: [number, number, number];

  constructor() {
    this.availableOptions = [15, 20, 25];
  }

  changeToLoad(numberToLoad: number) {
    this.toLoad.next(numberToLoad);
    localStorage.setItem('user-to-load', numberToLoad.toString());
  }

  getAvailableOptions() {
    return this.availableOptions;
  }

  private getToLoad() {
    let option;
    if (localStorage.getItem('user-to-load')) {
      option = Number(localStorage.getItem('user-to-load'));
      return !isNaN(option) ? option : this.defaultOption;
    } else {
      localStorage.setItem('user-to-load', this.defaultOption.toString());
      return this.defaultOption;
    }
  }
}

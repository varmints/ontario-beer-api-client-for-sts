import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BeersService } from '../_services/beers.service';
import { SortService } from '../_services/sort.service';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
})
export class ColumnsComponent implements OnInit {
  @Input() beers;

  subscription: Subscription;
  dropdownTitle: string = 'Choose a brewer';
  beersByBrewer;
  sortBy;

  constructor(
    private beersService: BeersService,
    private sortService: SortService
  ) {}

  ngOnInit(): void {
    this.subscription = this.beersService.currentBeersByBrewer.subscribe(
      (beers) => (this.beers = beers)
    );
    this.subscription = this.sortService.currentSortBy.subscribe(
      (sortBy) => (this.sortBy = sortBy)
    );
  }

  clickEvent(brewer: string) {
    this.dropdownTitle = brewer;
    this.beersByBrewer = this.getBeersByBrewer(brewer, this.sortBy);
    this.beersByBrewer;
  }

  getBeersByBrewer(brewer, sortBy) {
    return this.beers
      .filter((arr) => arr.brewer === brewer)
      .flatMap((elem) => elem.beers)
      .sort((a, b) => (a[sortBy.value] > b[sortBy.value] ? 1 : -1));
  }
}

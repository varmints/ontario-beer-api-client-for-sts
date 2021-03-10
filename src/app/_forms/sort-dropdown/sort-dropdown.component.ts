import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortService } from 'src/app/_services/sort.service';

@Component({
  selector: 'app-sort-dropdown',
  templateUrl: './sort-dropdown.component.html',
  styleUrls: ['./sort-dropdown.component.scss'],
})
export class SortDropdownComponent implements OnInit {
  sortBy: { name: string; value: string };
  subscription: Subscription;
  availableOptions;
  constructor(private sortService: SortService) {
    this.subscription = this.sortService.currentSortBy.subscribe(
      (sortBy) => (this.sortBy = sortBy)
    );
    this.availableOptions = this.sortService.getAvailableOptions();
  }

  ngOnInit(): void {
    this.subscription = this.sortService.currentSortBy.subscribe(
      (sortBy) => (this.sortBy = sortBy)
    );
  }

  changeSortBy(newSortBy) {
    this.sortService.changeSortBy(newSortBy);
  }
}

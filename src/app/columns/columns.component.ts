import { Component, Input, OnInit } from '@angular/core';
import { BeersService } from '../_services/beers.service';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
})
export class ColumnsComponent implements OnInit {
  @Input() beers;
  dropdownTitle: string = 'Choose a brewer';
  beersByBrewer;

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {}

  clickEvent(brewer: string) {
    this.dropdownTitle = brewer;
    this.beersByBrewer = this.getBeersByBrewer(brewer);
    console.log(this.beersByBrewer);
  }

  getBeersByBrewer(brewer) {
    return this.beers
      .filter((arr) => arr.brewer === brewer)
      .flatMap((elem) => elem.beers);
  }
}

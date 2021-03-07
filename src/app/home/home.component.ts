import { Component, OnInit } from '@angular/core';
import { Beer } from '../_models/beer';
import { BeersService } from '../_services/beers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beers: Beer[];

  constructor(private beerService: BeersService) {}

  ngOnInit(): void {
    this.loadBrewers();
  }

  loadBrewers() {
    this.beerService
      .getBeers()
      .pipe()
      .subscribe((response: any) => {
        this.beers = response;
      });
  }
}

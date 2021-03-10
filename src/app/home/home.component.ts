import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Beer } from '../_models/beer';
import { BeersService } from '../_services/beers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  beers;
  subscription: Subscription;

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.subscription = this.beersService.currentBeersByBrewer.subscribe(
      (beers) => (this.beers = beers)
    );
    this.loadBrewers();
  }

  loadBrewers() {
    this.beersService
      .getBeers()
      .pipe()
      .subscribe((response: any) => {
        this.beersService.changeBeers(response);
      });
  }
}

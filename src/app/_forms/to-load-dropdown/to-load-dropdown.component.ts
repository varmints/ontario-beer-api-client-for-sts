import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToLoadService } from 'src/app/_services/to-load.service';

@Component({
  selector: 'app-to-load-dropdown',
  templateUrl: './to-load-dropdown.component.html',
  styleUrls: ['./to-load-dropdown.component.scss'],
})
export class ToLoadDropdownComponent implements OnInit {
  toLoad: number;
  subscription: Subscription;
  selectedValue;
  availableOptions;

  constructor(private toLoadService: ToLoadService) {
    this.subscription = this.toLoadService.currentToLoad.subscribe(
      (toLoad) => (this.toLoad = toLoad)
    );
    this.availableOptions = this.toLoadService.getAvailableOptions();
  }

  ngOnInit(): void {
    this.subscription = this.toLoadService.currentToLoad.subscribe(
      (toLoad) => (this.toLoad = toLoad)
    );
  }

  changeToLoad(newToLoad) {
    this.toLoadService.changeToLoad(newToLoad);
  }
}

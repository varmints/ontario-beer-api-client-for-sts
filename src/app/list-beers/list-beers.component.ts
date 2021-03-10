import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageViewerService } from '../_services/image-viewer.service';
import { ToLoadService } from '../_services/to-load.service';

@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.scss'],
})
export class ListBeersComponent implements OnInit {
  @Input() beersByBrewer;
  startPage: number;
  paginationLimit: number;
  open: boolean;
  imageSrc: string;
  toLoad: number;
  subscription: Subscription;

  constructor(
    private imageViewerService: ImageViewerService,
    private toLoadService: ToLoadService
  ) {
    this.startPage = 0;
    this.subscription = this.toLoadService.currentToLoad.subscribe(
      (toLoad) => (this.toLoad = toLoad)
    );
    this.paginationLimit = this.toLoad;
  }

  ngOnInit(): void {}

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + Number(this.toLoad);
  }

  newOpen(imageSrc) {
    this.imageViewerService.nextOpen(true);
    this.imageViewerService.nextImageSrc(imageSrc);
  }

  onImgError(event) {
    event.target.src = './assets/mock-beer.png';
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ImageViewerService } from '../_services/image-viewer.service';

@Component({
  selector: 'app-list-beers',
  templateUrl: './list-beers.component.html',
  styleUrls: ['./list-beers.component.scss'],
})
export class ListBeersComponent implements OnInit {
  @Input() beersByBrewer;
  startPage: Number;
  paginationLimit: Number;
  open: boolean;
  imageSrc: string;

  constructor(private imageViewerService: ImageViewerService) {
    this.startPage = 0;
    this.paginationLimit = 15;
  }

  ngOnInit(): void {}

  showMoreItems() {
    this.paginationLimit = Number(this.paginationLimit) + 15;
  }

  newOpen(imageSrc) {
    this.imageViewerService.nextOpen(true);
    this.imageViewerService.nextImageSrc(imageSrc);
  }

  onImgError(event) {
    event.target.src = './assets/mock-beer.png';
  }
}

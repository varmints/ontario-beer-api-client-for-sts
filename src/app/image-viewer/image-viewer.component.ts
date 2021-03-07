import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImageViewerService } from '../_services/image-viewer.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
  imageSrc: string;
  open: boolean;

  constructor(private imageViewerService: ImageViewerService) {}

  ngOnInit(): void {
    this.imageViewerService.sharedImageSrc.subscribe(
      (imageSrc) => (this.imageSrc = imageSrc)
    );
    this.imageViewerService.sharedOpen.subscribe((open) => (this.open = open));
  }

  close() {
    this.imageViewerService.nextOpen(false);
  }

  onImgError(event) {
    event.target.src = './assets/mock-beer.png';
  }
}

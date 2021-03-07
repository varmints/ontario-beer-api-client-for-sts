import { Component, OnInit } from '@angular/core';
import { ImageViewerService } from './_services/image-viewer.service';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ontario-beer-api-client-for-sts';
  open: boolean;
  imageSrc: string;

  constructor(private imageViewerService: ImageViewerService) {}

  ngOnInit() {
    this.imageViewerService.sharedOpen.subscribe((open) => (this.open = open));
    this.imageViewerService.sharedImageSrc.subscribe(
      (imageSrc) => (this.imageSrc = imageSrc)
    );
  }
}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { ImageViewerService } from './_services/image-viewer.service';
import { SortService } from './_services/sort.service';
import { ThemeService } from './_services/theme.service';
import { ToLoadService } from './_services/to-load.service';

@Component({
  selector: '[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ontario-beer-api-client-for-sts';
  open: boolean;
  imageSrc: string;

  constructor(
    private imageViewerService: ImageViewerService,
    private themeService: ThemeService,
    private toLoadService: ToLoadService,
    private sortService: SortService
  ) {
    this.themeService.initTheme();
  }

  ngOnInit() {
    this.imageViewerService.sharedOpen.subscribe((open) => (this.open = open));
    this.imageViewerService.sharedImageSrc.subscribe(
      (imageSrc) => (this.imageSrc = imageSrc)
    );
  }
}

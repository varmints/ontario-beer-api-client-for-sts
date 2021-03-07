import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageViewerService {
  private imageSrc = new BehaviorSubject('');
  private open = new BehaviorSubject(false);
  sharedImageSrc = this.imageSrc.asObservable();
  sharedOpen = this.open.asObservable();

  constructor() {}

  nextImageSrc(imageSrc: string) {
    this.imageSrc.next(imageSrc);
  }

  nextOpen(open: boolean) {
    this.open.next(open);
  }
}

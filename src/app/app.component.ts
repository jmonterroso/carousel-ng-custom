import {Component, OnInit} from '@angular/core';
import {ImagesService} from './services/images.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'slider-dev';
  carouselItems$: Observable<any>;

  loadImages(): void {
    this.carouselItems$ = this.imageService.getImages('beaches');
  }

  constructor(private imageService: ImagesService) {
  }

  ngOnInit() {
    this.loadImages();
  }
}

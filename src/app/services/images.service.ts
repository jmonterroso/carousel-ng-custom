import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  url = 'https://pixabay.com/api/';
  key = '9656065-a4094594c34f9ac14c7fc4c39';
  config: object = {key: this.key, 'image_type': 'photo', 'min_width': 200, 'min_height': 200, 'orientation': 'horizontal'};

  getImages(q: string) {
    // returns the formatted array from pixabay
    return this.http.get(this.url, {params: {...this.config, q: q}})
      .pipe(map((item: any) => item.hits.map(({largeImageURL, user, likes}) => ({largeImageURL, user, likes}))));


  }

  constructor(private http: HttpClient) {


  }
}

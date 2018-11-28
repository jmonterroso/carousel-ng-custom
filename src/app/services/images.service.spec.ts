import {TestBed, async, inject} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {ImagesService} from './images.service';

describe('ImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it(`should create`, async(inject([HttpTestingController, ImagesService],
    (httpClient: HttpTestingController, imagesService: ImagesService) => {
      expect(imagesService).toBeTruthy();
    })));
});

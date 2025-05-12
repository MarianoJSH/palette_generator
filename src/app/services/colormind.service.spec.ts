import { TestBed } from '@angular/core/testing';

import { ColormindService } from './colormind.service';

describe('ColormindService', () => {
  let service: ColormindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColormindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

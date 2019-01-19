import { TestBed } from '@angular/core/testing';

import { TrainapiService } from './trainapi.service';

describe('TrainapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainapiService = TestBed.get(TrainapiService);
    expect(service).toBeTruthy();
  });
});

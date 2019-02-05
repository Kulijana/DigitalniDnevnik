import { TestBed } from '@angular/core/testing';

import { UcenikService } from './ucenik.service';

describe('UcenikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UcenikService = TestBed.get(UcenikService);
    expect(service).toBeTruthy();
  });
});

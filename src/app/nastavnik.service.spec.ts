import { TestBed } from '@angular/core/testing';

import { NastavnikService } from './nastavnik.service';

describe('NastavnikService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NastavnikService = TestBed.get(NastavnikService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RubrikaOcenaService } from './rubrika-ocena.service';

describe('RubrikaOcenaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RubrikaOcenaService = TestBed.get(RubrikaOcenaService);
    expect(service).toBeTruthy();
  });
});

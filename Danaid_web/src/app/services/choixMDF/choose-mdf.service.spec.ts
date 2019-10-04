import { TestBed } from '@angular/core/testing';

import { ChooseMDFService } from './choose-mdf.service';

describe('ChooseMDFService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChooseMDFService = TestBed.get(ChooseMDFService);
    expect(service).toBeTruthy();
  });
});

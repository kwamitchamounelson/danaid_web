import { TestBed } from '@angular/core/testing';

import { AjoutPersonneChargeService } from './ajout-personne-charge.service';

describe('AjoutPersonneChargeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjoutPersonneChargeService = TestBed.get(AjoutPersonneChargeService);
    expect(service).toBeTruthy();
  });
});

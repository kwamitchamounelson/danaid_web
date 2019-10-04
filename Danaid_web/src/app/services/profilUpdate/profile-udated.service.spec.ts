import { TestBed } from '@angular/core/testing';

import { ProfileUdatedService } from './profile-udated.service';

describe('ProfileUdatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileUdatedService = TestBed.get(ProfileUdatedService);
    expect(service).toBeTruthy();
  });
});

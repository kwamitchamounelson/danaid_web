import { TestBed } from '@angular/core/testing';

import { ValidationDocumentService } from './validation-document.service';

describe('ValidationDocumentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationDocumentService = TestBed.get(ValidationDocumentService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ValitionService } from './valition.service';

describe('ValitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValitionService = TestBed.get(ValitionService);
    expect(service).toBeTruthy();
  });
});

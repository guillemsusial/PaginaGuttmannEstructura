import { TestBed } from '@angular/core/testing';

import { BooleanSelectorService } from './boolean-selector.service';

describe('BooleanSelectorService', () => {
  let service: BooleanSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooleanSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

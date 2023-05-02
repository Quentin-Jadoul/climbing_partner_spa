import { TestBed } from '@angular/core/testing';

import { ClimbsService } from './climbs.service';

describe('ClimbsService', () => {
  let service: ClimbsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClimbsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

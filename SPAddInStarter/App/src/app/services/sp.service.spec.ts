import { TestBed, inject } from '@angular/core/testing';

import { SpService } from './sp.service';

describe('SpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpService]
    });
  });

  it('should be created', inject([SpService], (service: SpService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { SpAppLicenseService } from './sp-app-license.service';

describe('SpAppLicenseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpAppLicenseService]
    });
  });

  it('should be created', inject([SpAppLicenseService], (service: SpAppLicenseService) => {
    expect(service).toBeTruthy();
  }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppSignupService } from './app-signup.service';

describe('AppSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSignupService]
    });
  });

  it('should ...', inject([AppSignupService], (service: AppSignupService) => {
    expect(service).toBeTruthy();
  }));
});

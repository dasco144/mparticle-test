import { TestBed } from '@angular/core/testing';

import { MParticleService } from './mparticle.service';

describe('MParticleService', () => {
  let service: MParticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MParticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

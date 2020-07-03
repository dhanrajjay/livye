import { TestBed } from '@angular/core/testing';

import { LivyeComponentsService } from './livye-components.service';

describe('LivyeComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivyeComponentsService = TestBed.get(LivyeComponentsService);
    expect(service).toBeTruthy();
  });
});

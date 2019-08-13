import { TestBed } from '@angular/core/testing';

import { UnidadesEconomicasService } from './unidades-economicas.service';

describe('UnidadesEconomicasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadesEconomicasService = TestBed.get(UnidadesEconomicasService);
    expect(service).toBeTruthy();
  });
});

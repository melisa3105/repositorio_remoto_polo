import { TestBed } from '@angular/core/testing';

import { DevolverDatosService } from './devolver-datos.service';

describe('DevolverDatosService', () => {
  let service: DevolverDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevolverDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaReunionComponent } from './carga-reunion.component';

describe('CargaReunionComponent', () => {
  let component: CargaReunionComponent;
  let fixture: ComponentFixture<CargaReunionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaReunionComponent]
    });
    fixture = TestBed.createComponent(CargaReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

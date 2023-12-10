import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarReunionComponent } from './agregar-reunion.component';

describe('AgregarReunionComponent', () => {
  let component: AgregarReunionComponent;
  let fixture: ComponentFixture<AgregarReunionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarReunionComponent]
    });
    fixture = TestBed.createComponent(AgregarReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

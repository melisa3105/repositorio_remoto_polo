import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminacionReunionComponent } from './eliminacion-reunion.component';

describe('EliminacionReunionComponent', () => {
  let component: EliminacionReunionComponent;
  let fixture: ComponentFixture<EliminacionReunionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminacionReunionComponent]
    });
    fixture = TestBed.createComponent(EliminacionReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

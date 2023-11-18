import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoReunionesComponent } from './listado-reuniones.component';

describe('ListadoReunionesComponent', () => {
  let component: ListadoReunionesComponent;
  let fixture: ComponentFixture<ListadoReunionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoReunionesComponent]
    });
    fixture = TestBed.createComponent(ListadoReunionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPerroComponent } from './registro-perro.component';

describe('RegistroPerroComponent', () => {
  let component: RegistroPerroComponent;
  let fixture: ComponentFixture<RegistroPerroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPerroComponent]
    });
    fixture = TestBed.createComponent(RegistroPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

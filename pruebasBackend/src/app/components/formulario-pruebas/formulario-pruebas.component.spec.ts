import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPruebasComponent } from './formulario-pruebas.component';

describe('FormularioPruebasComponent', () => {
  let component: FormularioPruebasComponent;
  let fixture: ComponentFixture<FormularioPruebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPruebasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

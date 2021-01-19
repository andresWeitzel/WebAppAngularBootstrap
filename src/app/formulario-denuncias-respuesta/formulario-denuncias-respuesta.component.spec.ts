import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDenunciasRespuestaComponent } from './formulario-denuncias-respuesta.component';

describe('FormularioDenunciasRespuestaComponent', () => {
  let component: FormularioDenunciasRespuestaComponent;
  let fixture: ComponentFixture<FormularioDenunciasRespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDenunciasRespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDenunciasRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

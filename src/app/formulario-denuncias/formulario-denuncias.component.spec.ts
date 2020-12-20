import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDenunciasComponent } from './formulario-denuncias.component';

describe('FormularioDenunciasComponent', () => {
  let component: FormularioDenunciasComponent;
  let fixture: ComponentFixture<FormularioDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

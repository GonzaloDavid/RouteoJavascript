import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasNoEncontradaComponent } from './rutas-no-encontrada.component';

describe('RutasNoEncontradaComponent', () => {
  let component: RutasNoEncontradaComponent;
  let fixture: ComponentFixture<RutasNoEncontradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasNoEncontradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasNoEncontradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

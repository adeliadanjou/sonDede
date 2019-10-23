import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasGuardadasComponent } from './peliculas-guardadas.component';

describe('PeliculasGuardadasComponent', () => {
  let component: PeliculasGuardadasComponent;
  let fixture: ComponentFixture<PeliculasGuardadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasGuardadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasGuardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

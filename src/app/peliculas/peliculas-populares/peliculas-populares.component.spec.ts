import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPopularesComponent } from './peliculas-populares.component';

describe('PeliculasPopularesComponent', () => {
  let component: PeliculasPopularesComponent;
  let fixture: ComponentFixture<PeliculasPopularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasPopularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

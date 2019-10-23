import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasMejoresComponent } from './peliculas-mejores.component';

describe('PeliculasMejoresComponent', () => {
  let component: PeliculasMejoresComponent;
  let fixture: ComponentFixture<PeliculasMejoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasMejoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasMejoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

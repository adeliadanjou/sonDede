import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesMejoresComponent } from './series-mejores.component';

describe('SeriesMejoresComponent', () => {
  let component: SeriesMejoresComponent;
  let fixture: ComponentFixture<SeriesMejoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesMejoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesMejoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

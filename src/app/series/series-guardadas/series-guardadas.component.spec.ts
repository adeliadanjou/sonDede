import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesGuardadasComponent } from './series-guardadas.component';

describe('SeriesGuardadasComponent', () => {
  let component: SeriesGuardadasComponent;
  let fixture: ComponentFixture<SeriesGuardadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesGuardadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesGuardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardComponentComponent } from './movie-card-component.component';

describe('MovieCardComponentComponent', () => {
  let component: MovieCardComponentComponent;
  let fixture: ComponentFixture<MovieCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieViewModalComponent } from './movie-view-modal.component';

describe('MovieViewModalComponent', () => {
  let component: MovieViewModalComponent;
  let fixture: ComponentFixture<MovieViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieViewModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

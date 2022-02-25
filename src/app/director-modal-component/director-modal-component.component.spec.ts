import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorModalComponentComponent } from './director-modal-component.component';

describe('DirectorModalComponentComponent', () => {
  let component: DirectorModalComponentComponent;
  let fixture: ComponentFixture<DirectorModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorModalComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

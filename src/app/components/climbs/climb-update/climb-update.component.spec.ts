import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbUpdateComponent } from './climb-update.component';

describe('ClimbUpdateComponent', () => {
  let component: ClimbUpdateComponent;
  let fixture: ComponentFixture<ClimbUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimbUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

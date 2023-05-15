import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbDetailsComponent } from './climb-details.component';

describe('ClimbDetailsComponent', () => {
  let component: ClimbDetailsComponent;
  let fixture: ComponentFixture<ClimbDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimbDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

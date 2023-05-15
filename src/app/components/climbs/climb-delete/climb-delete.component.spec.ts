import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbDeleteComponent } from './climb-delete.component';

describe('ClimbDeleteComponent', () => {
  let component: ClimbDeleteComponent;
  let fixture: ComponentFixture<ClimbDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimbDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

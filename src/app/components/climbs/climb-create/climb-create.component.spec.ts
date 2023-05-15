import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbCreateComponent } from './climb-create.component';

describe('ClimbCreateComponent', () => {
  let component: ClimbCreateComponent;
  let fixture: ComponentFixture<ClimbCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

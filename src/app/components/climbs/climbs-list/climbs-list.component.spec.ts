import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbsListComponent } from './climbs-list.component';

describe('ClimbsListComponent', () => {
  let component: ClimbsListComponent;
  let fixture: ComponentFixture<ClimbsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClimbsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClimbsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

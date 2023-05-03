import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouldersListComponent } from './boulders-list.component';

describe('BouldersListComponent', () => {
  let component: BouldersListComponent;
  let fixture: ComponentFixture<BouldersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouldersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouldersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

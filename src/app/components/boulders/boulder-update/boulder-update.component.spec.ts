import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoulderUpdateComponent } from './boulder-update.component';

describe('BoulderUpdateComponent', () => {
  let component: BoulderUpdateComponent;
  let fixture: ComponentFixture<BoulderUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoulderUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoulderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoulderCreateComponent } from './boulder-create.component';

describe('BoulderCreateComponent', () => {
  let component: BoulderCreateComponent;
  let fixture: ComponentFixture<BoulderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoulderCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoulderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

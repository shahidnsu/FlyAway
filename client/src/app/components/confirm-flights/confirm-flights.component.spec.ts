import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFlightsComponent } from './confirm-flights.component';

describe('ConfirmFlightsComponent', () => {
  let component: ConfirmFlightsComponent;
  let fixture: ComponentFixture<ConfirmFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

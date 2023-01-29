import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFlightsComponent } from './select-flights.component';

describe('SelectFlightsComponent', () => {
  let component: SelectFlightsComponent;
  let fixture: ComponentFixture<SelectFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingFlightsPageComponent } from './upcoming-flights-page.component';

describe('UpcomingFlightsPageComponent', () => {
  let component: UpcomingFlightsPageComponent;
  let fixture: ComponentFixture<UpcomingFlightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingFlightsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingFlightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

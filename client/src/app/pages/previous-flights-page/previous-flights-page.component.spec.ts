import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousFlightsPageComponent } from './previous-flights-page.component';

describe('PreviousFlightsPageComponent', () => {
  let component: PreviousFlightsPageComponent;
  let fixture: ComponentFixture<PreviousFlightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousFlightsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousFlightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

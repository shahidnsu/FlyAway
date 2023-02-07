import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmFlightsPageComponent } from './confirm-flights-page.component';

describe('ConfirmFlightsPageComponent', () => {
  let component: ConfirmFlightsPageComponent;
  let fixture: ComponentFixture<ConfirmFlightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmFlightsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmFlightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

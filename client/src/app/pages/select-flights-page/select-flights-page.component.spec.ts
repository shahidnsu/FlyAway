import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFlightsPageComponent } from './select-flights-page.component';

describe('SelectFlightsPageComponent', () => {
  let component: SelectFlightsPageComponent;
  let fixture: ComponentFixture<SelectFlightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectFlightsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFlightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

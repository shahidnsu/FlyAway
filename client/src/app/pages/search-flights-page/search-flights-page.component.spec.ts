import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightsPageComponent } from './search-flights-page.component';

describe('SearchFlightsPageComponent', () => {
  let component: SearchFlightsPageComponent;
  let fixture: ComponentFixture<SearchFlightsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFlightsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFlightsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDateAndPlacesComponent } from './select-date-and-places.component';

describe('SelectDateAndPlacesComponent', () => {
  let component: SelectDateAndPlacesComponent;
  let fixture: ComponentFixture<SelectDateAndPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDateAndPlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDateAndPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

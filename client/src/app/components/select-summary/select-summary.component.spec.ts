import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSummaryComponent } from './select-summary.component';

describe('SelectSummaryComponent', () => {
  let component: SelectSummaryComponent;
  let fixture: ComponentFixture<SelectSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

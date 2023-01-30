import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLoginComponent } from './test-login.component';

describe('TestLoginComponent', () => {
  let component: TestLoginComponent;
  let fixture: ComponentFixture<TestLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

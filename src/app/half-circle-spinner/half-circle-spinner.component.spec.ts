import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfCircleSpinnerComponent } from './half-circle-spinner.component';

describe('HalfCircleSpinnerComponent', () => {
  let component: HalfCircleSpinnerComponent;
  let fixture: ComponentFixture<HalfCircleSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfCircleSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfCircleSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

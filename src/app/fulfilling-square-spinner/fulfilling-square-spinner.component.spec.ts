import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillingSquareSpinnerComponent } from './fulfilling-square-spinner.component';

describe('FulfillingSquareSpinnerComponent', () => {
  let component: FulfillingSquareSpinnerComponent;
  let fixture: ComponentFixture<FulfillingSquareSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulfillingSquareSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfillingSquareSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

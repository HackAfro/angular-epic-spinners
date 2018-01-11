import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalingSquaresSpinnerComponent } from './scaling-squares-spinner.component';

describe('ScalingSquaresSpinnerComponent', () => {
  let component: ScalingSquaresSpinnerComponent;
  let fixture: ComponentFixture<ScalingSquaresSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScalingSquaresSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScalingSquaresSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

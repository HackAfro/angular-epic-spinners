import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwappingSquaresSpinnerComponent } from './swapping-squares-spinner.component';

describe('SwappingSquaresSpinnerComponent', () => {
  let component: SwappingSquaresSpinnerComponent;
  let fixture: ComponentFixture<SwappingSquaresSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwappingSquaresSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwappingSquaresSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfBuildingSquareSpinnerComponent } from './self-building-square-spinner.component';

describe('SelfBuildingSquareSpinnerComponent', () => {
  let component: SelfBuildingSquareSpinnerComponent;
  let fixture: ComponentFixture<SelfBuildingSquareSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfBuildingSquareSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfBuildingSquareSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

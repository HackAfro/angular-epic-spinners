import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedingRhombusSpinnerComponent } from './breeding-rhombus-spinner.component';

describe('BreedingRhombusSpinnerComponent', () => {
  let component: BreedingRhombusSpinnerComponent;
  let fixture: ComponentFixture<BreedingRhombusSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreedingRhombusSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedingRhombusSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

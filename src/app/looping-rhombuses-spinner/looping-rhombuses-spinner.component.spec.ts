import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopingRhombusesSpinnerComponent } from './looping-rhombuses-spinner.component';

describe('LoopingRhombusesSpinnerComponent', () => {
  let component: LoopingRhombusesSpinnerComponent;
  let fixture: ComponentFixture<LoopingRhombusesSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoopingRhombusesSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoopingRhombusesSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

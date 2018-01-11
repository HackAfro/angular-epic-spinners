import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclesToRhumbusesSpinnerComponent } from './circles-to-rhumbuses-spinner.component';

describe('CirclesToRhumbusesSpinnerComponent', () => {
  let component: CirclesToRhumbusesSpinnerComponent;
  let fixture: ComponentFixture<CirclesToRhumbusesSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclesToRhumbusesSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclesToRhumbusesSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

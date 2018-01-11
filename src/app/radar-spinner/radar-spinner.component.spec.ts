import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarSpinnerComponent } from './radar-spinner.component';

describe('RadarSpinnerComponent', () => {
  let component: RadarSpinnerComponent;
  let fixture: ComponentFixture<RadarSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

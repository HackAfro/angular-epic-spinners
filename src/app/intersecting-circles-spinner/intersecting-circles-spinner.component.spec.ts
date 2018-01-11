import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectingCirclesSpinnerComponent } from './intersecting-circles-spinner.component';

describe('IntersectingCirclesSpinnerComponent', () => {
  let component: IntersectingCirclesSpinnerComponent;
  let fixture: ComponentFixture<IntersectingCirclesSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntersectingCirclesSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectingCirclesSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

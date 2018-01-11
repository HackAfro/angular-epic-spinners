import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulfillingBouncingCircleSpinnerComponent } from './fulfilling-bouncing-circle-spinner.component';

describe('FulfillingBouncingCircleSpinnerComponent', () => {
  let component: FulfillingBouncingCircleSpinnerComponent;
  let fixture: ComponentFixture<FulfillingBouncingCircleSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulfillingBouncingCircleSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulfillingBouncingCircleSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

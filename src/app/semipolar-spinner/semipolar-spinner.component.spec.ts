import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemipolarSpinnerComponent } from './semipolar-spinner.component';

describe('SemipolarSpinnerComponent', () => {
  let component: SemipolarSpinnerComponent;
  let fixture: ComponentFixture<SemipolarSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemipolarSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemipolarSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

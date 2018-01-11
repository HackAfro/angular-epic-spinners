import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerprintSpinnerComponent } from './fingerprint-spinner.component';

describe('FingerprintSpinnerComponent', () => {
  let component: FingerprintSpinnerComponent;
  let fixture: ComponentFixture<FingerprintSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerprintSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerprintSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

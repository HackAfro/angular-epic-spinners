import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelSpinnerComponent } from './pixel-spinner.component';

describe('PixelSpinnerComponent', () => {
  let component: PixelSpinnerComponent;
  let fixture: ComponentFixture<PixelSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PixelSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

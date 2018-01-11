import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerSpinnerComponent } from './flower-spinner.component';

describe('FlowerSpinnerComponent', () => {
  let component: FlowerSpinnerComponent;
  let fixture: ComponentFixture<FlowerSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowerSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

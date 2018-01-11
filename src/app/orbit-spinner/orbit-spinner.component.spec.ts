import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitSpinnerComponent } from './orbit-spinner.component';

describe('OrbitSpinnerComponent', () => {
  let component: OrbitSpinnerComponent;
  let fixture: ComponentFixture<OrbitSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomSpinnerComponent } from './atom-spinner.component';

describe('AtomSpinnerComponent', () => {
  let component: AtomSpinnerComponent;
  let fixture: ComponentFixture<AtomSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

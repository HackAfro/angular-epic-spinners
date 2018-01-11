import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringSpinnerComponent } from './spring-spinner.component';

describe('SpringSpinnerComponent', () => {
  let component: SpringSpinnerComponent;
  let fixture: ComponentFixture<SpringSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpringSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollowDotsSpinnerComponent } from './hollow-dots-spinner.component';

describe('HollowDotsSpinnerComponent', () => {
  let component: HollowDotsSpinnerComponent;
  let fixture: ComponentFixture<HollowDotsSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollowDotsSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollowDotsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

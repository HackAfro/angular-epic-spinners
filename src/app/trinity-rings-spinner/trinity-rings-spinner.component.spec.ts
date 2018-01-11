import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinityRingsSpinnerComponent } from './trinity-rings-spinner.component';

describe('TrinityRingsSpinnerComponent', () => {
  let component: TrinityRingsSpinnerComponent;
  let fixture: ComponentFixture<TrinityRingsSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrinityRingsSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinityRingsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

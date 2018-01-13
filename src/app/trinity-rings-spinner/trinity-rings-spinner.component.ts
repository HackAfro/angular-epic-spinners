import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trinity-rings-spinner',
  template: `
    <div class="trinity-rings-spinner" [style]="spinnerStyle">
      <div class="circle circle1" [style]="ring1Style"></div>
      <div class="circle circle3" [style]="ring3Style"></div>
      <div class="circle circle2" [style]="ring2Style"></div>
    </div>
  `,
  styleUrls: ['./trinity-rings-spinner.component.css']
})
export class TrinityRingsSpinnerComponent implements OnInit {

  constructor() {
  }

  containerPadding = 3;

  @Input() animationDuration = 1500;
  @Input() size = 60;
  @Input() color = '#fff';

  get outerRingSize(): number {
    return this.size - this.containerPadding * 2;
  }

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      padding: `${this.containerPadding}px`
    };
  }

  get ring1Style(): object {
    return {
      height: `${this.outerRingSize}px`,
      width: `${this.outerRingSize}px`,
      borderColor: this.color,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get ring2Style(): object {
    return {
      height: `${this.outerRingSize * 0.65}px`,
      width: `${this.outerRingSize * 0.65}px`,
      borderColor: this.color,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get ring3Style(): object {
    return {
      height: `${this.outerRingSize * 0.1}px`,
      width: `${this.outerRingSize * 0.1}px`,
      borderColor: this.color,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  ngOnInit() {
  }

}

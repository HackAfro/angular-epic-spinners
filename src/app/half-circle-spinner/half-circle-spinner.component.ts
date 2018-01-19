import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-circle-spinner',
  template: `
    <div class="half-circle-spinner" [ngStyle]="spinnerStyle">
      <div class="circle circle-1" [ngStyle]="circle1Style"></div>
      <div class="circle circle-2" [ngStyle]="circle2Style"></div>
    </div>
  `,
  styleUrls: ['./half-circle-spinner.component.css']
})
export class HalfCircleSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 1000;
  @Input() size = 60;
  @Input() color = '#fff';

  get spinnerStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
    };
  }

  get circleStyle() {
    return {
      borderWidth: `${this.size / 10}px`,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get circle1Style() {
    return {
      ...this.circleStyle,
      borderTopColor: this.color
    };
  }

  get circle2Style() {
    return {
      ...this.circleStyle,
      borderBottomColor: this.color
    };
  }

  ngOnInit() {
  }

}

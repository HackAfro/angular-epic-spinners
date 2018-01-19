import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles-to-rhumbuses-spinner',
  template: `
    <div class="circles-to-rhombuses-spinner" [ngStyle]="spinnerStyle">
      <div class="circle" *ngFor="let cs of circlesStyles; let i = index;" [ngStyle]="cs"></div>
    </div>
  `,
  styleUrls: ['./circles-to-rhumbuses-spinner.component.css']
})
export class CirclesToRhumbusesSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() circleSize = 15;
  @Input() circlesNum = 3;
  @Input() animationDuration = 1200;
  @Input() color = '#fff';

  get circleMarginLeft() {
    return this.circleSize * 1.125;
  }

  get spinnerStyle() {
    return {
      height: `${this.circleSize}px`,
      width: `${(this.circleSize + this.circleMarginLeft) * this.circlesNum}px`
    };
  }

  get circleStyle() {
    return {
      borderColor: this.color,
      animationDuration: `${this.animationDuration}ms`,
      height: `${this.circleSize}px`,
      width: `${this.circleSize}px`,
      marginLeft: `${this.circleMarginLeft}px`
    };
  }

  get circlesStyles() {
    const circlesStyles = [];
    const delay = 150;

    for (let i = 1; i <= this.circlesNum; i++) {
      const style = {
        ...this.circleStyle,
        animationDelay: `${i * delay}ms`
      };
      circlesStyles.push(style);
    }

    return circlesStyles;
  }

  ngOnInit() {

  }
}

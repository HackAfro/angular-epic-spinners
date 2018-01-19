import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hollow-dots-spinner',
  template: `
    <div class="hollow-dots-spinner" [ngStyle]="spinnerStyle">
      <div class="dot" *ngFor="let ds of dotsStyles" [ngStyle]="ds"></div>
    </div>
  `,
  styleUrls: ['./hollow-dots-spinner.component.css']
})
export class HollowDotsSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 1000;
  @Input() dotSize = 15;
  @Input() dotsNum = 3;
  @Input() color = '#fff';

  get horizontalMargin(): number {
    return this.dotSize / 2;
  }

  get spinnerStyle(): object {
    return {
      height: `${this.dotSize}px`,
      width: `${this.dotSize}px`,
    };
  }

  get dotStyle(): object {
    return {
      width: `${this.dotSize}px`,
      height: `${this.dotSize}px`,
      margin: `0 ${this.horizontalMargin}px`,
      borderWidth: `${this.dotSize / 5}px`,
      borderColor: this.color,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get dotsStyles(): object {
    const dotsStyles = [];
    const delayModifier = 0.3;
    const basicDelay = 1000;

    for (let i = 1; i <= this.dotsNum; i++) {
      const style = {
        ...this.dotStyle,
        animationDelay: `${basicDelay * i * delayModifier}ms`
      };

      dotsStyles.push(style);
    }

    return dotsStyles;
  }

  ngOnInit() {
  }

}

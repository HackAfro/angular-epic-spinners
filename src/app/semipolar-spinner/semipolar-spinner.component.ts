import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-semipolar-spinner',
  template: `
    <div class="semipolar-spinner" [ngStyle]="spinnerStyle">
      <div class="ring" *ngFor="let rs of ringsStyles" [ngStyle]="rs"></div>
    </div>
  `,
  styleUrls: ['./semipolar-spinner.component.css']
})
export class SemipolarSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 2000;
  @Input() size = 65;
  @Input() color = '#fff';

  ringsNum = 5;

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  get ringStyle(): object {
    return {
      animationDuration: `${this.animationDuration}ms`,
      borderTopColor: this.color,
      borderLeftColor: this.color
    };
  }

  get ringsStyles(): object {
    const ringsStyles = [];
    const delayModifier = 0.1;
    const ringWidth = this.size * 0.05;
    const positionIncrement = ringWidth * 2;
    const sizeDecrement = this.size * 0.2;

    for (let i = 0; i < this.ringsNum; i++) {
      const computedSize = `${this.size - sizeDecrement * i}px`;
      const computedPosition = `${positionIncrement * i}px`;
      const style = {
        animationDelay: `${this.animationDuration * delayModifier * (this.ringsNum - i - 1)}ms`,
        height: computedSize,
        width: computedSize,
        left: computedPosition,
        top: computedPosition,
        borderWidth: `${ringWidth}px`,
        ...this.ringStyle
      };
      ringsStyles.push(style);
    }
    return ringsStyles;
  }

  ngOnInit() {
  }

}

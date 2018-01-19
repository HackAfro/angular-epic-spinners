import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-radar-spinner',
  template: `
    <div class="radar-spinner" [ngStyle]="spinnerStyle">
      <div class="circle" *ngFor="let cs of circlesStyles" [ngStyle]="cs">
        <div class="circle-inner-container" [ngStyle]="circleInnerContainerStyle">
          <div class="circle-inner" [ngStyle]="circleInnerStyle"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./radar-spinner.component.css']
})
export class RadarSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() size = 110;
  @Input() animationDuration = 2000;
  @Input() color = '#fff';

  private circlesNum = 4;

  get borderWidth(): number {
    return this.size * 5 / 110;
  }

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  get circleStyle(): object {
    return {
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get circleInnerContainerStyle(): object {
    return {
      borderWidth: `${this.borderWidth}px`
    };
  }

  get circleInnerStyle(): object {
    return {
      borderLeftColor: this.color,
      borderRightColor: this.color,
      borderWidth: `${this.borderWidth}px`
    };
  }

  get circlesStyles(): object {
    const circlesStyles = [];
    const delay = this.animationDuration * 0.15;
    for (let i = 0; i < this.circlesNum; i++) {
      circlesStyles.push(Object.assign({
        padding: `${this.borderWidth * 2 * i}px`,
        animationDelay: `${i === this.circlesNum - 1 ? 0 : delay}ms`
      }, this.circleStyle));
    }
    return circlesStyles;
  }

  ngOnInit() {
  }

}

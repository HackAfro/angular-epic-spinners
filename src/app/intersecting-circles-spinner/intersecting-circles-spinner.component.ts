import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-intersecting-circles-spinner',
  template: `
    <div class="intersecting-circles-spinner" [style]="spinnerStyle">
      <div class="spinnerBlock" [style]="spinnerBlockStyle">
        <span class="circle" *ngFor="let cs of circleStyles" [style]="cs"></span>
      </div>
    </div>
  `,
  styleUrls: ['./intersecting-circles-spinner.component.css']
})
export class IntersectingCirclesSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 1200;
  @Input() size = 70;
  @Input() color = '#fff';

  get circleSize(): number {
    return this.size / 2;
  }

  get spinnerStyle(): object {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`
    };
  }

  get spinnerBlockStyle(): object {
    return {
      animationDuration: `${this.animationDuration}ms`,
      width: `${this.circleSize}px`,
      height: `${this.circleSize}px`
    };
  }

  get circleStyle(): object {
    return {
      borderColor: this.color
    };
  }

  get circleStyles(): object {
    const circlesPositions = [
      {top: 0, left: 0},
      {left: `${this.circleSize * -0.36}px`, top: `${this.circleSize * 0.2}px`},
      {left: `${this.circleSize * -0.36}px`, top: `${this.circleSize * -0.2}px`},
      {left: 0, top: `${this.circleSize * -0.36}px`},
      {left: `${this.circleSize * 0.36}px`, top: `${this.circleSize * -0.2}px`},
      {left: `${this.circleSize * 0.36}px`, top: `${this.circleSize * 0.2}px`},
      {left: 0, top: `${this.circleSize * 0.36}px`}
    ];

    return circlesPositions.map((cp) => {
      return {cp, ...this.circleStyle};
    });
  }

  ngOnInit() {
  }

}

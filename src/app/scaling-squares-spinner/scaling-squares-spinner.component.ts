import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-scaling-squares-spinner',
  template: `
    <div class="scaling-squares-spinner" [ngStyle]="spinnerStyle">
      <div class="square"
           *ngFor="let ss of squaresStyles; let i = index;"
           [ngClass]="childClass(i)"
           [ngStyle]="ss">
      </div>
    </div>
  `,
  styleUrls: ['./scaling-squares-spinner.component.css']
})
export class ScalingSquaresSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() size = 65;
  @Input() color = '#fff';
  @Input() animationDuration = 1250;

  squaresNum = 4;

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get squareStyle(): object {
    return {
      height: `${this.size * 0.25 / 1.3}px`,
      width: `${this.size * 0.25 / 1.3}px`,
      animationDuration: `${this.animationDuration}ms`,
      borderWidth: `${this.size * 0.04 / 1.3}px`,
      borderColor: this.color
    };
  }

  get squaresStyles(): object {
    const squaresStyles = [];
    for (let i = 1; i <= this.squaresNum; i++) {
      squaresStyles.push({...this.squareStyle});
    }
    return squaresStyles;
  }

  childClass(i) {
    return `square-${i + 1}`;
  }

  ngOnInit() {
  }

}

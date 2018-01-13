import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-self-building-square-spinner',
  template: `
    <div class="self-building-square-spinner" [style]="spinnerStyle">
      <div class="square"
           *ngFor="let ss of squaresStyles; let i = index;"
           [style]="ss"
           [ngClass]="{'clear': i && i % 3 === 0}"
      >
      </div>
    </div>
  `,
  styleUrls: ['./self-building-square-spinner.component.css']
})
export class SelfBuildingSquareSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 6000;
  @Input() size = 40;
  @Input() color = '#fff';

  squaresNum = 9;

  get squareSize(): number {
    return this.size / 4;
  }

  get initialTopPosition(): number {
    return -this.squareSize * 2 / 3;
  }

  get spinnerStyle(): object {
    return {
      top: `${-this.initialTopPosition}px`,
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  get squareStyle(): object {
    return {
      height: `${this.squareSize}px`,
      width: `${this.squareSize}px`,
      top: `${this.initialTopPosition}px`,
      marginRight: `${this.squareSize / 3}px`,
      marginTop: `${this.squareSize / 3}px`,
      animationDuration: `${this.animationDuration}ms`,
      background: this.color
    };
  }

  get squaresStyles(): object {
    const squaresStyles = [];
    const delaysMultipliers = [6, 7, 8, 3, 4, 5, 0, 1, 2];
    const delayModifier = this.animationDuration * 0.05;
    for (let i = 0; i < this.squaresNum; i++) {
      squaresStyles.push({
        animationDelay: `${delayModifier * delaysMultipliers[i]}ms`,
        ...this.squareStyle
      });
    }
    return squaresStyles;
  }

  ngOnInit() {
  }

}

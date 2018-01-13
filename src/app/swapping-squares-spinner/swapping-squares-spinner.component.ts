import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-swapping-squares-spinner',
  template: `
    <div class="swapping-squares-spinner" [style]="spinnerStyle">
      <div class="square"
           *ngFor="let ss of squaresStyles; let i = index;"
           [ngClass]="'square-' + (i + 1)"
           [style]="ss">
      </div>
    </div>
  `,
  styleUrls: ['./swapping-squares-spinner.component.css']
})
export class SwappingSquaresSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 1000;
  @Input() size = 65;
  @Input() color = '#fff';

  animationBaseName = 'swapping-square-animation-child';
  squaresNum = 4;

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`
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
    const delay = this.animationDuration * 0.5;

    for (let i = 1; i <= this.squaresNum; i++) {
      squaresStyles.push({
        animationDelay: `${i % 2 === 0 ? delay : 0}ms`,
        ...this.squareStyle
      });
    }
    return squaresStyles;
  }

  ngOnInit() {
  }

}

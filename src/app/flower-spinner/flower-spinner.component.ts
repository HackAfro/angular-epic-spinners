import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower-spinner',
  template: `
    <div class="flower-spinner" [ngStyle]="spinnerStyle">
      <div class="dots-container" [ngStyle]="dotsContainerStyle">
        <div class="bigger-dot" [ngStyle]="biggerDotStyle">
          <div class="smaller-dot" [ngStyle]="smallerDotStyle"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./flower-spinner.component.css']
})
export class FlowerSpinnerComponent implements OnInit, OnChanges {

  constructor() {
  }

  @Input() size = 70;
  @Input() animationDuration = 2500;
  @Input() color = '#fff';

  smallerDotAnimationBaseName = 'flower-spinner-smaller-dot-animation';
  biggerDotAnimationBaseName = 'flower-spinner-bigger-dot-animation';
  currentSmallerDotAnimationBaseName = '';
  currentBiggerDotAnimationBaseName = '';

  get dotSize(): number {
    return this.size / 7;
  }

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
    };
  }

  get dotsContainerStyle(): object {
    return {
      width: `${this.color}px`,
      height: `${this.color}px`,
    };
  }

  get smallerDotStyle(): object {
    return {
      background: this.color,
      animationDuration: `${this.animationDuration}ms`,
      animationName: this.currentSmallerDotAnimationBaseName
    };
  }

  get biggerDotStyle(): object {
    return {
      background: this.color,
      animationDuration: `${this.animationDuration}ms`,
      animationName: this.currentBiggerDotAnimationBaseName
    };
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}

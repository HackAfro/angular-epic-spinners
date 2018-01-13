import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pixel-spinner',
  template: `
    <div class="pixel-spinner" [style]="spinnerStyle">
      <div class="pixel-spinner-inner" [style]="spinnerInnerStyle"></div>
    </div>
  `,
  styleUrls: ['./pixel-spinner.component.css']
})
export class PixelSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 1000;
  @Input() size = 50;
  @Input() color = '#fff';

  animationBaseName = 'pixel-sspinner-animation';
  currentAnimationName = '';

  get pixelSize(): number {
    return this.size / 7;
  }

  get spinnerStyle(): object {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`
    };
  }

  get spinnerInnerStyle(): object {
    return {
      animationDuration: `${this.animationDuration}ms`,
      animationName: this.currentAnimationName,
      width: `${this.pixelSize}px`,
      height: `${this.pixelSize}px`,
      backgroundColor: this.color,
      color: this.color,
      boxShadow: `
                        ${this.pixelSize * 1.5}px ${this.pixelSize * 1.5}px 0 0,
                        ${this.pixelSize * -1.5}px ${this.pixelSize * -1.5}px 0 0,
                        ${this.pixelSize * 1.5}px ${this.pixelSize * -1.5}px 0 0,
                        ${this.pixelSize * -1.5}px ${this.pixelSize * 1.5}px 0 0,
                        0 ${this.pixelSize * 1.5}px 0 0,
                        ${this.pixelSize * 1.5}px 0 0 0,
                        ${this.pixelSize * -1.5}px 0 0 0,
                        0 ${this.pixelSize * -1.5}px 0 0
                      `
    };
  }

  ngOnInit() {
  }

}

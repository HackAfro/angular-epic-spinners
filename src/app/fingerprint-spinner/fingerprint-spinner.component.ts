import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fingerprint-spinner',
  template: `
    <div class="fingerprint-spinner" [style]="spinnerStyle">
      <div class="spinner-ring" *ngFor="let rs of ringsStyles" [style]="rs"></div>
    </div>

  `,
  styleUrls: ['./fingerprint-spinner.component.css']
})
export class FingerprintSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() size = 60;
  @Input() animationDuration = 1500;
  @Input() color = '#fff';

  ringsNum = 9;
  containerPadding = 2;

  get outerRingSize(): number {
    return this.size - this.containerPadding * 2;
  }

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      padding: `${this.containerPadding}px`
    };
  }

  get ringStyle(): object {
    return {
      borderTopColor: this.color,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get ringsStyles(): object {
    const ringsStyles = [];
    const ringBase = this.outerRingSize / (this.ringsNum);
    const ringInc = ringBase;

    for (let i = 1; i <= this.ringsNum; i++) {
      ringsStyles.push({
        ...this.ringStyle,
        animationDelay: `${i * 50}ms`,
        height: `${ringBase + (i + 1) * ringInc}px`,
        width: `${ringBase + (i + 1) * ringInc}px`,
      });
    }

    return ringsStyles;
  }

  ngOnInit() {
  }

}

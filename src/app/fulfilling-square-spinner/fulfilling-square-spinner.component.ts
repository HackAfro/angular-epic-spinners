import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fulfilling-square-spinner',
  template: `
    <div class="fulfilling-square-spinner" [ngStyle]="spinnerStyle">
      <div class="spinner-inner" [ngStyle]="spinnerInnerStyle"></div>
    </div>
  `,
  styleUrls: ['./fulfilling-square-spinner.component.css']
})
export class FulfillingSquareSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 4000;
  @Input() size = 50;
  @Input() color = '#fff';

  get spinnerStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      borderColor: this.color,
    };
  }

  get spinnerInnerStyle() {
    return {
      backgroundColor: this.color
    };
  }


  ngOnInit() {
  }

}

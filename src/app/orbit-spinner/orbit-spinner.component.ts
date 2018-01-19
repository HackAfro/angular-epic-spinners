import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orbit-spinner',
  template: `
    <div class="orbit-spinner" [ngStyle]="spinnerStyle">
      <div class="orbit one" [ngStyle]="orbitStyle"></div>
      <div class="orbit two" [ngStyle]="orbitStyle"></div>
      <div class="orbit three" [ngStyle]="orbitStyle"></div>
    </div>
  `,
  styleUrls: ['./orbit-spinner.component.css']
})
export class OrbitSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() animationDuration = 1000;
  @Input() size = 50;
  @Input() color = '#fff';

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  get orbitStyle(): object {
    return {
      borderColor: this.color,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  ngOnInit() {
  }

}

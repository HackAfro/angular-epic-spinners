import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orbit-spinner',
  template: `
    <div class="orbit-spinner" [style]="spinnerStyle">
      <div class="orbit one" [style]="orbitStyle"></div>
      <div class="orbit two" [style]="orbitStyle"></div>
      <div class="orbit three" [style]="orbitStyle"></div>
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

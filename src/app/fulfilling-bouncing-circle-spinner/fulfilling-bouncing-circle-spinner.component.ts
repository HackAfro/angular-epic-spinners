import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fulfilling-bouncing-circle-spinner',
  template: `
    <div class="fulfilling-bouncing-circle-spinner" [style]="spinnerStyle">
      <div class="circle" [style]="circleStyle"></div>
      <div class="orbit" [style]="orbitStyle"></div>
    </div>
  `,
  styleUrls: ['./fulfilling-bouncing-circle-spinner.component.css']
})
export class FulfillingBouncingCircleSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() size = 60;
  @Input() animationDuration = 4000;
  @Input() color = '#fff';

  get spinnerStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get orbitStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      borderColor: this.color,
      borderWidth: `${this.size * 0.03}px`,
      animationDuration: `${this.animationDuration}ms`
    };
  }

  get circleStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      borderColor: this.color,
      color: this.color,
      borderWidth: `${this.size * 0.1}px`,
      animationDuration: `${this.animationDuration}ms`
    };
  }


  ngOnInit() {
  }

}

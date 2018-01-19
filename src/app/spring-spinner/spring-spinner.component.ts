import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-spring-spinner',
  template: `
    <div class="spring-spinner" [ngStyle]="spinnerStyle">
      <div class="spring-spinner-part top" [ngStyle]="spinnerPartStyle">
        <div class="spring-spinner-rotator" [ngStyle]="rotatorStyle"></div>
      </div>
      <div class="spring-spinner-part bottom" [ngStyle]="spinnerPartStyle">
        <div class="spring-spinner-rotator" [ngStyle]="rotatorStyle"></div>
      </div>
    </div>
  `,
  styleUrls: ['./spring-spinner.component.css']
})
export class SpringSpinnerComponent implements OnInit {

  constructor() {
  }

  @Input() size = 60;
  @Input() color = '#fff';
  @Input() animationDuration = 2000;

  animationBaseName = 'spring-spinner-animation';
  currentAnimationName = '';

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  get spinnerPartStyle(): object {
    return {
      height: `${this.size / 2}px`,
      width: `${this.size}px`
    };
  }

  get rotatorStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      borderRightColor: this.color,
      borderTopColor: this.color,
      borderWidth: `${this.size / 7}px`,
      animationDuration: `${this.animationDuration}ms`,
      animationName: this.currentAnimationName
    };
  }

  ngOnInit() {
  }

}

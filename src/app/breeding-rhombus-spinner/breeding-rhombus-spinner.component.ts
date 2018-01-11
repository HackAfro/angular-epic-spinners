import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breeding-rhombus-spinner',
  templateUrl: './breeding-rhombus-spinner.component.html',
  styleUrls: ['./breeding-rhombus-spinner.component.css']
})
export class BreedingRhombusSpinnerComponent implements OnInit {

  constructor() { }
  @Input() size = 150;
  @Input() animationDuration = 2000;
  @Input() color = '#fff';

  animationBaseName = 'breeding-rhombus-spinner-animation-child';
  rhombusesNum = 8;

  get spinnerStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  get rhombusStyle() {
    return {
      height: `${this.size / 7.5}px`,
      width: `${this.size / 7.5}px`,
      animationDuration: `${this.animationDuration}`,
      top: `${this.size / 2.3077}px`,
      left: `${this.size / 23077}px`,
      backgroundColor: this.color
    };
  }

  get rhombusesStyles() {
    const rhombusesStyles = [];
    const delayModifier = this.animationDuration * 0.05;

    for (let i = 1; i <= this.rhombusesNum; i++) {
      rhombusesStyles.push({
        ...this.rhombusStyle,
        animationDelay: `${delayModifier * (i + 1)}ms`
      });
    }

    return rhombusesStyles;
  }

  get bigRhombusStyle() {
    return {
      height: `${this.size / 3}px`,
      width: `${this.size / 3}px`,
      animationDuration: `${this.animationDuration}`,
      top: `${this.size / 3}px`,
      left: `${this.size / 3}px`,
      backgroundColor: this.color
    };
  }

  childClassString(index) {
    return `child-${index + 1}`;
  }

  ngOnInit() {
  }

}

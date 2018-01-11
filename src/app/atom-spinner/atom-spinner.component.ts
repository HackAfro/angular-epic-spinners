import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atom-spinner',
  templateUrl: './atom-spinner.component.html',
  styleUrls: ['./atom-spinner.component.css']
})
export class AtomSpinnerComponent implements OnInit {

  constructor() { }
  @Input() size = 60;
  @Input() animationDuration = 1000;
  @Input() color = 'red';

  get spinnerStyle() {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  get circleStyle() {
    return {
      color: this.color,
      fontSize: `${this.size * 0.24}px`
    };
  }

  get lineStyle() {
    return {
      animationDuration: `${this.animationDuration}ms`,
      borderLeftWidth: `${this.size / 25}px`,
      borderRightWidth: `${this.size / 25}px`,
      borderLeftColor: this.color
    };
  }

  ngOnInit() {
  }

}

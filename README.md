# Angular Epic Spinners
[![npm](https://img.shields.io/npm/dm/angular-epic-spinners.svg)]() [![npm](https://img.shields.io/npm/l/angular-epic-spinners.svg)]() [![npm](https://img.shields.io/npm/v/angular-epic-spinners.svg)]()

Reusable angular components for epic spinners

## Demo
Visit the [demo](http://hackafro.github.io/angular-epic-spinners/) page to see spinners in action 

## Installation

`npm install --save angular-epic-spinners`

OR

`yarn install angular-epic-spinners`

## Usage
Example 

Import each spinners' module into your module file and use the spinner component anywhere. 

```typescript  
  import {AtomSpinnerModule} from 'angular-epic-spinners'
  
  @NgModule({
    imports: [AtomSpinnerModule]
  })
```

Then in your html file

```html  
  <app-atom-spinner
     [animationDuration]="1000"
     [size]="60"
     [color]="'#ff1d5e'"
    ></app-atom-spinner>
```

## Components list
You can easily configure spinners' size, color and animation speed

```html
<app-flower-spinner
  [animationDuration]="2500"
  [size]="70"
  [color]="'#ff1d5e'"
></app-flower-spinner>

<app-pixel-spinner
  [animationDuration]="2000"
  [pixelSize]="70"
  [color]="'#ff1d5e'"
></app-pixel-spinner>

<app-hollow-dots-spinner
  [animationDuration]="1000"
  [dotSize]="15"
  [dotsNum]="3"
  [color]="'#ff1d5e'"
></app-hollow-dots-spinner>

<app-intersecting-circles-spinner
  [animationDuration]="1200"
  [size]="70"
  [color]="'#ff1d5e'"
></app-intersecting-circles-spinner>

<app-orbit-spinner
  [animationDuration]="1200"
  [size]="55"
  [color]="'#ff1d5e'"
></app-orbit-spinner>

<app-radar-spinner
  [animationDuration]="2000"
  [size]="60"
  [color]="'#ff1d5e'"
></app-radar-spinner>

<app-scaling-squares-spinner
  [animationDuration]="1250"
  [size]="65"
  [color]="'#ff1d5e'"
></app-scaling-squares-spinner>

<app-half-circle-spinner
  [animationDuration]="1000"
  [size]="60"
  [color]="'#ff1d5e'"
></app-half-circle-spinner>

<app-trinity-rings-spinner
  [animationDuration]="1500"
  [size]="66"
  [color]="'#ff1d5e'"
></app-trinity-rings-spinner>

<app-fulfilling-square-spinner
  [animationDuration]="4000"
  [size]="50"
  [color]="'#ff1d5e'"
></app-fulfilling-square-spinner>

<app-circles-to-rhombuses-spinner
  [animationDuration]="1200"
  [circlesNum]="3"
  [circleSize]="15"
  [color]="'#ff1d5e'"
></app-circles-to-rhombuses-spinner>
    
<app-semipolar-spinner
  [animationDuration]="2000"
  [size]="65"
  [color]="'#ff1d5e'"
></app-semipolar-spinner>
    
<app-self-building-square-spinner
  [animationDuration]="6000"
  [size]="40"
  [color]="'#ff1d5e'"
></app-self-building-square-spinner>
    
<app-swapping-squares-spinner
  [animationDuration]="1000"
  [size]="65"
  [color]="'#ff1d5e'"
></app-swapping-squares-spinner>

<app-fulfilling-bouncing-circle-spinner
  [animationDuration]="4000"
  [size]="60"
  [color]="'#ff1d5e'"
></app-fulfilling-bouncing-circle-spinner>

<app-fingerprint-spinner
  [animationDuration]="1500"
  [size]="64"
  [color]="'#ff1d5e'"
></app-fingerprint-spinner>

<app-spring-spinner
  [animationDuration]="3000"
  [size]="60"
  [color]="'#ff1d5e'"
></app-spring-spinner>

<app-atom-spinner
  [animationDuration]="1000"
  [size]="60"
  [color]="'#ff1d5e'"
></app-atom-spinner>

<app-looping-rhombuses-spinner
  [animationDuration]="2500"
  [rhombusSize]="15"
  [color]="'#ff1d5e'"
></app-looping-rhombuses-spinner>

<app-breeding-rhombus-spinner
  [animationDuration]="2000"
  [size]="65"
  [color]="'#ff1d5e'"
/><app-breeding-rhombus-spinner>
```
## Support?
- Star the repo :star:
- Create pull requests 
- Follow me on twitter [@iamAfro](https://twitter.com/iamafro)

## License
[MIT](https://github.com/HackAfro/angular-epic-spinners/blob/v1.0.3/LICENSE) license.




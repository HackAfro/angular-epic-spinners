import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AtomSpinnerComponent} from './atom-spinner/atom-spinner.component';
import {CirclesToRhumbusesSpinnerComponent} from './circles-to-rhumbuses-spinner/circles-to-rhumbuses-spinner.component';
import {FulfillingBouncingCircleSpinnerComponent} from './fulfilling-bouncing-circle-spinner/fulfilling-bouncing-circle-spinner.component';
import {LoopingRhombusesSpinnerComponent} from './looping-rhombuses-spinner/looping-rhombuses-spinner.component';
import {SemipolarSpinnerComponent} from './semipolar-spinner/semipolar-spinner.component';
import {FingerprintSpinnerComponent} from './fingerprint-spinner/fingerprint-spinner.component';
import {FlowerSpinnerComponent} from './flower-spinner/flower-spinner.component';
import {FulfillingSquareSpinnerComponent} from './fulfilling-square-spinner/fulfilling-square-spinner.component';
import {HalfCircleSpinnerComponent} from './half-circle-spinner/half-circle-spinner.component';
import {HollowDotsSpinnerComponent} from './hollow-dots-spinner/hollow-dots-spinner.component';
import {IntersectingCirclesSpinnerComponent} from './intersecting-circles-spinner/intersecting-circles-spinner.component';
import {OrbitSpinnerComponent} from './orbit-spinner/orbit-spinner.component';
import {PixelSpinnerComponent} from './pixel-spinner/pixel-spinner.component';
import {RadarSpinnerComponent} from './radar-spinner/radar-spinner.component';
import {ScalingSquaresSpinnerComponent} from './scaling-squares-spinner/scaling-squares-spinner.component';
import {SelfBuildingSquareSpinnerComponent} from './self-building-square-spinner/self-building-square-spinner.component';
import {SpringSpinnerComponent} from './spring-spinner/spring-spinner.component';
import {SwappingSquaresSpinnerComponent} from './swapping-squares-spinner/swapping-squares-spinner.component';
import {TrinityRingsSpinnerComponent} from './trinity-rings-spinner/trinity-rings-spinner.component';
import {BreedingRhombusSpinnerComponent} from './breeding-rhombus-spinner/breeding-rhombus-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    AtomSpinnerComponent,
    BreedingRhombusSpinnerComponent,
    CirclesToRhumbusesSpinnerComponent,
    FingerprintSpinnerComponent,
    FlowerSpinnerComponent,
    FulfillingBouncingCircleSpinnerComponent,
    FulfillingSquareSpinnerComponent,
    HalfCircleSpinnerComponent,
    HollowDotsSpinnerComponent,
    IntersectingCirclesSpinnerComponent,
    LoopingRhombusesSpinnerComponent,
    OrbitSpinnerComponent,
    PixelSpinnerComponent,
    RadarSpinnerComponent,
    ScalingSquaresSpinnerComponent,
    SelfBuildingSquareSpinnerComponent,
    SemipolarSpinnerComponent,
    SpringSpinnerComponent,
    SwappingSquaresSpinnerComponent,
    TrinityRingsSpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AtomSpinnerModule} from './atom-spinner/atom-spinner.module';
import {BreedingRhombusSpinnerModule} from './breeding-rhombus-spinner/breeding-rhombus-spinner.module';
import {FlowerSpinnerModule} from './flower-spinner/flower-spinner.module';
import {FulfillingBouncingCircleSpinnerModule} from './fulfilling-bouncing-circle-spinner/fulfilling-bouncing-circle-spinner.module';
import {FulfillingSquareSpinnerModule} from './fulfilling-square-spinner/fulfilling-square-spinner.module';
import {HalfCircleSpinnerModule} from './half-circle-spinner/half-circle-spinner.module';
import {LoopingRhumbusesSpinnerModule} from './looping-rhombuses-spinner/looping-rhumbuses-spinner.module';
import {IntersectingCirclesSpinnerModule} from './intersecting-circles-spinner/intersecting-circles-spinner.module';
import {HollowDotsSpinnerModule} from './hollow-dots-spinner/hollow-dots-spinner.module';
import {PixelSpinnerModule} from './pixel-spinner/pixel-spinner.module';
import {OrbitSpinnerModule} from './orbit-spinner/orbit-spinner.module';
import {ScalingSquaresSpinnerModule} from './scaling-squares-spinner/scaling-squares-spinner.module';
import {SemipolarSpinnerModule} from './semipolar-spinner/semipolar-spinner.module';
import {SelfBuildingSquareSpinnerModule} from './self-building-square-spinner/self-building-square-spinner.module';
import {SwappingSquaresSpinnerModule} from './swapping-squares-spinner/swapping-squares-spinner.module';
import {RadarSpinnerModule} from './radar-spinner/radar-spinner.module';
import {SpringSpinnerModule} from './spring-spinner/spring-spinner.module';
import {TrinityRingsSpinnerModule} from './trinity-rings-spinner/trinity-rings-spinner.module';
import {CirclesToRhumbusesSpinnerModule} from './circles-to-rhumbuses-spinner/circles-to-rhumbuses-spinner.module';
import {FingerprintSpinnerModule} from './fingerprint-spinner/fingerprint-spinner.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtomSpinnerModule,
    BreedingRhombusSpinnerModule,
    CirclesToRhumbusesSpinnerModule,
    FingerprintSpinnerModule,
    FlowerSpinnerModule,
    FulfillingBouncingCircleSpinnerModule,
    FulfillingSquareSpinnerModule,
    HalfCircleSpinnerModule,
    HollowDotsSpinnerModule,
    IntersectingCirclesSpinnerModule,
    LoopingRhumbusesSpinnerModule,
    OrbitSpinnerModule,
    PixelSpinnerModule,
    RadarSpinnerModule,
    ScalingSquaresSpinnerModule,
    SelfBuildingSquareSpinnerModule,
    SemipolarSpinnerModule,
    SpringSpinnerModule,
    SwappingSquaresSpinnerModule,
    TrinityRingsSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

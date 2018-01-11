import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AtomSpinnerComponent } from './atom-spinner/atom-spinner.component';
import { CirclesToRhumbusesSpinnerComponent } from './circles-to-rhumbuses-spinner/circles-to-rhumbuses-spinner.component';
import { FulfillingBouncingCircleSpinnerComponent } from './fulfilling-bouncing-circle-spinner/fulfilling-bouncing-circle-spinner.component';
import { LoopingRhombusesSpinnerComponent } from './looping-rhombuses-spinner/looping-rhombuses-spinner.component';
import { SemipolarSpinnerComponent } from './semipolar-spinner/semipolar-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    AtomSpinnerComponent,
    CirclesToRhumbusesSpinnerComponent,
    FulfillingBouncingCircleSpinnerComponent,
    LoopingRhombusesSpinnerComponent,
    SemipolarSpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

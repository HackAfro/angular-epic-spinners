import {NgModule} from '@angular/core';

import {FlowerSpinnerComponent} from './flower-spinner.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [FlowerSpinnerComponent],
  declarations: [FlowerSpinnerComponent],
  providers: [],
})
export class FlowerSpinnerModule {
}

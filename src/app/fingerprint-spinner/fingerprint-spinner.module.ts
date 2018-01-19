import {NgModule} from '@angular/core';

import {FingerprintSpinnerComponent} from './fingerprint-spinner.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [CommonModule],
  exports: [FingerprintSpinnerComponent],
  declarations: [FingerprintSpinnerComponent],
  providers: [],
})
export class FingerprintSpinnerModule {
}

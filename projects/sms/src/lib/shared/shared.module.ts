import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SanitizerPipe } from './sanitizer/sanitizer.pipe';


@NgModule({
  imports: [],
  exports: [SanitizerPipe],
  declarations: [SanitizerPipe],
  providers: []
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
  }
}

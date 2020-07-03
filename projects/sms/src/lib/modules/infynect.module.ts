import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ToastService } from './toast/toast.service';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [ ],
  exports: [ ],
  declarations: [ ],
  providers: [
    ToastService, LoginService
  ]
})
export class InfynectModule {
  constructor(@Optional() @SkipSelf() parentModule: InfynectModule) {
  }
}
